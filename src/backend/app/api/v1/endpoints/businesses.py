from fastapi import APIRouter, HTTPException, Depends
from app.schemas.base import BusinessCreate, BusinessRead
from typing import List
import uuid

router = APIRouter()

# Mock DB for demonstration - in production this would use supabase client
MOCK_BUSINESSES = [
    {
        "id": "e4f8d2b1-6a5c-4d8e-9b7a-1c2d3e4f5a6b",
        "name": "Luxury Optical",
        "slug": "luxury-optical",
        "logo_url": "https://images.unsplash.com/photo-1556740734-7f1a62f91b86?auto=format&fit=crop&q=80&w=200"
    },
    {
        "id": "a1b2c3d4-e5f6-4a5b-b6c7-d8e9f0a1b2c3",
        "name": "Urban Barbers",
        "slug": "urban-barbers",
        "logo_url": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=200"
    }
]

@router.get("/", response_model=List[BusinessRead])
async def get_businesses():
    return MOCK_BUSINESSES

@router.get("/{slug}", response_model=BusinessRead)
async def get_business_by_slug(slug: str):
    business = next((b for b in MOCK_BUSINESSES if b["slug"] == slug), None)
    if not business:
        raise HTTPException(status_code=404, detail="Business not found")
    return business

@router.post("/", response_model=BusinessRead)
async def create_business(business: BusinessCreate):
    new_id = str(uuid.uuid4())
    new_business = {"id": new_id, **business.dict()}
    MOCK_BUSINESSES.append(new_business)
    return new_business
