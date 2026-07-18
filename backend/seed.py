import sys
import os

# Add the current directory to sys.path so we can import app
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from app.database import SessionLocal
from app import models
from app.security import get_password_hash

def seed_database():
    db = SessionLocal()
    try:
        # Check if Admin already exists
        admin_count = db.query(models.Admin).count()
        if admin_count == 0:
            print("Seeding admins...")
            admin = models.Admin(
                name="System Administrator",
                email="admin@placewise.com",
                password_hash=get_password_hash("password123")
            )
            db.add(admin)
            db.commit()
            print("Seeding admin complete!")
        else:
            print("Admins already seeded.")

        # Check if Students already exist
        student_count = db.query(models.Student).count()
        if student_count == 0:
            print("Seeding students...")
            students = [
                models.Student(
                    name="Alex Johnson",
                    email="alex.johnson@example.com",
                    password_hash=get_password_hash("password123"),
                    cgpa=8.9,
                    skills="React, Javascript, Python, Node.js",
                    projects="E-Commerce Platform, Chat Application"
                ),
                models.Student(
                    name="Jared Sullivan",
                    email="jared.sullivan@example.com",
                    password_hash=get_password_hash("password123"),
                    cgpa=9.2,
                    skills="Java, C++, Spring Boot, SQL",
                    projects="Distributed Key-Value Store, Compiler"
                ),
                models.Student(
                    name="Anaya Miller",
                    email="anaya.miller@example.com",
                    password_hash=get_password_hash("password123"),
                    cgpa=7.4,
                    skills="HTML, CSS, Javascript, Figma, UI Design",
                    projects="Portfolio Website, Redesign of University Portal"
                ),
                models.Student(
                    name="Liam Kim",
                    email="liam.kim@example.com",
                    password_hash=get_password_hash("password123"),
                    cgpa=5.8,
                    skills="Python, SQL, Data Visualization",
                    projects="Basic Data Scraper, Data Analysis Scripts"
                )
            ]
            db.add_all(students)
            db.commit()
            print("Seeding students complete!")
        else:
            print("Students already seeded.")
            
    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
        raise e
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
