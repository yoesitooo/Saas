from fastapi import Request, HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import jwt
from app.core.config import settings

security = HTTPBearer()

async def get_current_user(auth: HTTPAuthorizationCredentials = Security(security)):
    """
    Decodes and verifies the Supabase JWT.
    """
    token = auth.credentials
    try:
        payload = jwt.decode(
            token, 
            settings.SUPABASE_KEY, # In Supabase, the JWT secret is often the API Key (service role or jwt secret)
            algorithms=["HS256"],
            audience="authenticated"
        )
        return payload
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"Invalid authentication: {str(e)}")

async def get_business_id(request: Request):
    """
    Helper to extract business_id from the user payload or headers.
    """
    # Logic to map user_id from JWT to business_id in DB
    return "extract-from-jwt-metadata-or-db"
