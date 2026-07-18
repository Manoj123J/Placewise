from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from ..database import get_db
from .. import models

router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    role: str

@router.post("/login")
def login(request: LoginRequest, db: Session = Depends(get_db)):
    if request.role == "admin":
        user = db.query(models.Admin).filter(models.Admin.email == request.email).first()
        if not user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid admin email address"
            )
        return {
            "token": "mock-admin-jwt-token-xyz",
            "role": "admin",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
            }
        }
    elif request.role == "student":
        user = db.query(models.Student).filter(models.Student.email == request.email).first()
        if not user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid student email address"
            )
        return {
            "token": "mock-student-jwt-token-abc",
            "role": "student",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
            }
        }
    else:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid role selected"
        )
