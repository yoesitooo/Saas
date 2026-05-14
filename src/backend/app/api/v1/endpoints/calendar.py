from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import RedirectResponse
from app.core.config import settings
from app.core.database import get_db
import requests

router = APIRouter()

# You would get these from Google Cloud Console
GOOGLE_CLIENT_ID = settings.GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET = settings.GOOGLE_CLIENT_SECRET
GOOGLE_REDIRECT_URI = "http://localhost:8000/api/v1/calendar/callback"

@router.get("/auth")
async def google_auth():
    """
    Step 1: Redirect user to Google for authorization
    """
    scope = "https://www.googleapis.com/auth/calendar.events"
    auth_url = (
        f"https://accounts.google.com/o/oauth2/v2/auth?"
        f"client_id={GOOGLE_CLIENT_ID}&"
        f"redirect_uri={GOOGLE_REDIRECT_URI}&"
        f"response_type=code&"
        f"scope={scope}&"
        f"access_type=offline&"
        f"prompt=consent"
    )
    return RedirectResponse(auth_url)

@router.get("/callback")
async def google_callback(code: str, db=Depends(get_db)):
    """
    Step 2: Exchange code for tokens
    """
    token_url = "https://oauth2.googleapis.com/token"
    data = {
        "code": code,
        "client_id": GOOGLE_CLIENT_ID,
        "client_secret": GOOGLE_CLIENT_SECRET,
        "redirect_uri": GOOGLE_REDIRECT_URI,
        "grant_type": "authorization_code"
    }
    
    response = requests.post(token_url, data=data)
    tokens = response.json()
    
    if "error" in tokens:
        raise HTTPException(status_code=400, detail=tokens.get("error_description"))
    
    # Save tokens to database (associated with the staff member)
    # This logic would require the business_id/staff_id from current_user
    # db.table("google_calendar_sync").upsert({
    #     "access_token": tokens["access_token"],
    #     "refresh_token": tokens.get("refresh_token"),
    #     "token_expiry": "..."
    # }).execute()
    
    return {"status": "success", "message": "Google Calendar connected!"}
