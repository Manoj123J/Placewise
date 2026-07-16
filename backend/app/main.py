from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import students, admin, companies, tests

# Create SQLite database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Placewise API",
    description="AI-powered student placement readiness platform backend",
    version="1.0.0"
)

# CORS Configuration
# Allowed origin: http://localhost:5173
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(students.router)
app.include_router(admin.router)
app.include_router(companies.router)
app.include_router(tests.router)

@app.get("/health", tags=["health"])
def health_check():
    return {"status": "ok"}

@app.get("/", tags=["root"])
def read_root():
    return {
        "message": "Welcome to the Placewise API",
        "docs_url": "/docs",
        "health": "/health"
    }
