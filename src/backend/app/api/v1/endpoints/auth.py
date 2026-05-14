from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
async def login():
    return {"message": "login"}

@router.post("/register")
async def register():
    return {"message": "register"}
