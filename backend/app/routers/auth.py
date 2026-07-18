from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from ..database import get_db
from .. import models
from ..security import create_access_token, verify_password

router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    role: str

@router.post("/login")
def login(request: LoginRequest, db: Session = Depends(get_db)):
    if request.role == "admin":
        user = db.query(models.Admin).filter(models.Admin.email == request.email).first()
        if not user or not user.password_hash or not verify_password(request.password, user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )
        access_token = create_access_token(data={"sub": user.email, "role": "admin"})
        return {
            "token": access_token,
            "role": "admin",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
            }
        }
    elif request.role == "student":
        user = db.query(models.Student).filter(models.Student.email == request.email).first()
        if not user or not user.password_hash or not verify_password(request.password, user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password"
            )
        access_token = create_access_token(data={"sub": user.email, "role": "student"})
        return {
            "token": access_token,
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
