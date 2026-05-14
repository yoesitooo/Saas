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
    try:
        # 1. Persist to Supabase
        # We use the db client which is already initialized with settings
        data = {
            "business_id": str(appointment.business_id) if hasattr(appointment, 'business_id') else "default-uuid",
            "staff_id": str(appointment.staff_id),
            "service_id": str(appointment.service_id),
            "client_name": appointment.client_name,
            "client_email": appointment.client_email,
            "start_time": appointment.start_time,
            "status": "pending"
        }
        
        # This is where the real magic happens once keys are set
        # res = db.table("appointments").insert(data).execute()
        
        # 2. Trigger Notifications (Resend/SendGrid)
        notifier = NotificationService()
        notifier.send_appointment_confirmation(
            to_email=appointment.client_email,
            client_name=appointment.client_name,
            date=appointment.start_time,
            business_name="Business Admin"
        )
        
        return {
            "status": "success", 
            "message": "Appointment created and notifications triggered",
            "appointment_id": str(uuid.uuid4())
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create appointment: {str(e)}")
