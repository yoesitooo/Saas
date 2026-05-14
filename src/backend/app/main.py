from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.endpoints import auth, businesses, branches, staff, services, appointments, calendar

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])
app.include_router(businesses.router, prefix=f"{settings.API_V1_STR}/businesses", tags=["businesses"])
app.include_router(branches.router, prefix=f"{settings.API_V1_STR}/branches", tags=["branches"])
app.include_router(staff.router, prefix=f"{settings.API_V1_STR}/staff", tags=["staff"])
app.include_router(services.router, prefix=f"{settings.API_V1_STR}/services", tags=["services"])
app.include_router(appointments.router, prefix=f"{settings.API_V1_STR}/appointments", tags=["appointments"])
app.include_router(calendar.router, prefix=f"{settings.API_V1_STR}/calendar", tags=["calendar"])

@app.get("/")
async def root():
    return {"message": "Welcome to the Booking SaaS API"}

@app.get("/health")
async def health_check():
    return {"status": "online", "version": "1.0.0"}
