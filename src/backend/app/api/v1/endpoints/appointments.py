from fastapi import APIRouter, Depends, HTTPException
from app.schemas.base import AppointmentCreate
from app.core.database import get_db
from app.core.calendar import GoogleCalendarClient
from app.core.notifications import NotificationService
from typing import List
import uuid

router = APIRouter()

@router.post("/")
async def create_appointment(
    appointment: AppointmentCreate, 
    db=Depends(get_db)
):
    # 1. Save to Supabase
    # res = db.table("appointments").insert(appointment.dict()).execute()
    
    # 2. Check if staff has Google Calendar enabled
    # sync_info = db.table("google_calendar_sync").select("*").eq("staff_id", appointment.staff_id).single().execute()
    
    # 3. Trigger Notifications
    notifier = NotificationService()
    notifier.send_appointment_confirmation(
        to_email=appointment.client_email,
        client_name=appointment.client_name,
        date=appointment.start_time,
        business_name="Your Local Business" # This would be fetched from DB
    )
    
    return {"status": "success", "appointment_id": str(uuid.uuid4())}
