from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import models, schemas

router = APIRouter(prefix="/tests", tags=["tests"])

@router.post("/", response_model=schemas.TestResponse, status_code=status.HTTP_201_CREATED)
def create_test_record(test: schemas.TestCreate, db: Session = Depends(get_db)):
    # Check if student exists
    db_student = db.query(models.Student).filter(models.Student.id == test.student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
        
    new_test = models.Test(**test.model_dump())
    db.add(new_test)
    db.commit()
    db.refresh(new_test)
    return new_test

@router.get("/", response_model=List[schemas.TestResponse])
def read_tests(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.Test).offset(skip).limit(limit).all()

@router.get("/{test_id}", response_model=schemas.TestResponse)
def read_test(test_id: int, db: Session = Depends(get_db)):
    db_test = db.query(models.Test).filter(models.Test.id == test_id).first()
    if not db_test:
        raise HTTPException(status_code=404, detail="Test record not found")
    return db_test

@router.get("/student/{student_id}", response_model=List[schemas.TestResponse])
def read_student_tests(student_id: int, db: Session = Depends(get_db)):
    # Check if student exists
    db_student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
        
    return db.query(models.Test).filter(models.Test.student_id == student_id).all()
