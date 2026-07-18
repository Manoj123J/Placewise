from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine, Base
from .routers import students, admin, companies, tests


app = FastAPI(
    title="Placewise API",
    description="AI-powered student placement readiness platform backend",
    version="1.0.0"
)


@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(
    students.router,
    prefix="/api/v1"
)

app.include_router(
    admin.router,
    prefix="/api/v1"
)

app.include_router(
    companies.router,
    prefix="/api/v1"
)

app.include_router(
    tests.router,
    prefix="/api/v1"
)


@app.get("/health")
def health_check():
    return {
        "status":"ok"
    }


@app.get("/")
def read_root():
    return {
        "message":"Welcome to Placewise API",
        "docs":"/docs",
        "health":"/health"
    }