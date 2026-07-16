from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import models, schemas
from ..services.ai_service import get_eligibility_explanation

router = APIRouter(prefix="/companies", tags=["companies"])

@router.post("/", response_model=schemas.CompanyResponse, status_code=status.HTTP_201_CREATED)
def create_company(company: schemas.CompanyCreate, db: Session = Depends(get_db)):
    new_company = models.Company(**company.model_dump())
    db.add(new_company)
    db.commit()
    db.refresh(new_company)
    return new_company

@router.get("/", response_model=List[schemas.CompanyResponse])
def read_companies(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.Company).offset(skip).limit(limit).all()

@router.get("/{company_id}", response_model=schemas.CompanyResponse)
def read_company(company_id: int, db: Session = Depends(get_db)):
    db_company = db.query(models.Company).filter(models.Company.id == company_id).first()
    if not db_company:
        raise HTTPException(status_code=404, detail="Company not found")
    return db_company

@router.delete("/{company_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_company(company_id: int, db: Session = Depends(get_db)):
    db_company = db.query(models.Company).filter(models.Company.id == company_id).first()
    if not db_company:
        raise HTTPException(status_code=404, detail="Company not found")
    db.delete(db_company)
    db.commit()
    return None

@router.post("/{company_id}/check-eligibility/{student_id}")
def check_eligibility(company_id: int, student_id: int, db: Session = Depends(get_db)):
    db_company = db.query(models.Company).filter(models.Company.id == company_id).first()
    if not db_company:
        raise HTTPException(status_code=404, detail="Company not found")
    
    db_student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
    
    student_profile = {
        "name": db_student.name,
        "email": db_student.email,
        "cgpa": db_student.cgpa,
        "skills": db_student.skills or "",
        "projects": db_student.projects or ""
    }
    
    explanation = get_eligibility_explanation(student_profile, db_company.jd_text or "")
    return {
        "company_id": company_id,
        "company_name": db_company.name,
        "student_id": student_id,
        "student_name": db_student.name,
        "eligible": "highly eligible" in explanation.lower() or "ready" in explanation.lower(),
        "explanation": explanation
    }
