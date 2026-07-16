from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import models, schemas
from ..services.ai_service import generate_skill_roadmap

router = APIRouter(prefix="/students", tags=["students"])

@router.post("/", response_model=schemas.StudentResponse, status_code=status.HTTP_201_CREATED)
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    db_student = db.query(models.Student).filter(models.Student.email == student.email).first()
    if db_student:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )
    
    new_student = models.Student(**student.model_dump())
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

@router.get("/", response_model=List[schemas.StudentResponse])
def read_students(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.Student).offset(skip).limit(limit).all()

@router.get("/{student_id}", response_model=schemas.StudentResponse)
def read_student(student_id: int, db: Session = Depends(get_db)):
    db_student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
    return db_student

@router.put("/{student_id}", response_model=schemas.StudentResponse)
def update_student(student_id: int, student_update: schemas.StudentUpdate, db: Session = Depends(get_db)):
    db_student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
    
    update_data = student_update.model_dump(exclude_unset=True)
    
    # Check if updating email to one that already exists
    if "email" in update_data and update_data["email"] != db_student.email:
        email_check = db.query(models.Student).filter(models.Student.email == update_data["email"]).first()
        if email_check:
            raise HTTPException(status_code=400, detail="Email already registered")
            
    for key, value in update_data.items():
        setattr(db_student, key, value)
        
    db.commit()
    db.refresh(db_student)
    return db_student

@router.delete("/{student_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_student(student_id: int, db: Session = Depends(get_db)):
    db_student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
    db.delete(db_student)
    db.commit()
    return None

@router.post("/{student_id}/roadmap")
def get_student_roadmap(student_id: int, target_skills: str, db: Session = Depends(get_db)):
    db_student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
    
    current_skills = db_student.skills or ""
    roadmap = generate_skill_roadmap(current_skills, target_skills)
    return {
        "student_id": student_id,
        "current_skills": current_skills,
        "target_skills": target_skills,
        "roadmap": roadmap
    }
