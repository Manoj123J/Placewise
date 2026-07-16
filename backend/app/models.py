from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.sql import func
from .database import Base

class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    cgpa = Column(Float, nullable=False)
    skills = Column(String, nullable=True)  # Store as comma-separated or text
    projects = Column(String, nullable=True)  # Store as comma-separated or text
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)

class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    required_skills = Column(String, nullable=True)  # Store as comma-separated or text
    jd_text = Column(String, nullable=True)

class Test(Base):
    __tablename__ = "tests"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False)
    topic = Column(String, nullable=False)
    score = Column(Float, nullable=False)
    date = Column(DateTime(timezone=True), server_default=func.now())
