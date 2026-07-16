from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# --- Student Schemas ---
class StudentBase(BaseModel):
    name: str
    email: EmailStr
    cgpa: float
    skills: Optional[str] = None
    projects: Optional[str] = None

class StudentCreate(StudentBase):
    pass

class StudentUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    cgpa: Optional[float] = None
    skills: Optional[str] = None
    projects: Optional[str] = None

class StudentResponse(StudentBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


# --- Admin Schemas ---
class AdminBase(BaseModel):
    name: str
    email: EmailStr

class AdminCreate(AdminBase):
    pass

class AdminResponse(AdminBase):
    id: int

    class Config:
        from_attributes = True


# --- Company Schemas ---
class CompanyBase(BaseModel):
    name: str
    required_skills: Optional[str] = None
    jd_text: Optional[str] = None

class CompanyCreate(CompanyBase):
    pass

class CompanyResponse(CompanyBase):
    id: int

    class Config:
        from_attributes = True


# --- Test Schemas ---
class TestBase(BaseModel):
    student_id: int
    topic: str
    score: float

class TestCreate(TestBase):
    pass

class TestResponse(TestBase):
    id: int
    date: datetime

    class Config:
        from_attributes = True
