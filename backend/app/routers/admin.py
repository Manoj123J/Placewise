from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import models, schemas

router = APIRouter(prefix="/admin", tags=["admin"])

@router.post("/", response_model=schemas.AdminResponse, status_code=status.HTTP_201_CREATED)
def create_admin(admin: schemas.AdminCreate, db: Session = Depends(get_db)):
    db_admin = db.query(models.Admin).filter(models.Admin.email == admin.email).first()
    if db_admin:
        raise HTTPException(
            status_code=400,
            detail="Admin email already registered"
        )
    new_admin = models.Admin(**admin.model_dump())
    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)
    return new_admin

@router.get("/", response_model=List[schemas.AdminResponse])
def read_admins(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.Admin).offset(skip).limit(limit).all()

@router.get("/{admin_id}", response_model=schemas.AdminResponse)
def read_admin(admin_id: int, db: Session = Depends(get_db)):
    db_admin = db.query(models.Admin).filter(models.Admin.id == admin_id).first()
    if not db_admin:
        raise HTTPException(status_code=404, detail="Admin not found")
    return db_admin

@router.delete("/{admin_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_admin(admin_id: int, db: Session = Depends(get_db)):
    db_admin = db.query(models.Admin).filter(models.Admin.id == admin_id).first()
    if not db_admin:
        raise HTTPException(status_code=404, detail="Admin not found")
    db.delete(db_admin)
    db.commit()
    return None
