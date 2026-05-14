import requests
from app.core.config import settings

class NotificationService:
    def __init__(self, api_key: str = None):
        self.api_key = api_key or "mock_key"
        self.base_url = "https://api.resend.com/emails" # Example using Resend

    def send_appointment_confirmation(self, to_email: str, client_name: str, date: str, business_name: str):
        """
        Sends a confirmation email to the client.
        """
        html_content = f"""
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #2563eb;">Appointment Confirmed!</h1>
            <p>Hi <strong>{client_name}</strong>,</p>
            <p>Your appointment with <strong>{business_name}</strong> has been successfully scheduled.</p>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0;"><strong>Date & Time:</strong> {date}</p>
            </div>
            <p style="color: #6b7280; font-size: 14px;">If you need to reschedule or cancel, please contact the business directly.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="text-align: center; color: #9ca3af; font-size: 12px;">Powered by Horum Booking</p>
        </div>
        """
        
        # In a real scenario, you'd perform a POST request to Resend/SendGrid
        print(f"NOTIFICATION: Sending email to {to_email} for {business_name}")
        return True

    def send_staff_notification(self, staff_email: str, client_name: str, date: str):
        """
        Notifies the staff member about the new booking.
        """
        print(f"NOTIFICATION: Notifying staff {staff_email} about new booking with {client_name}")
        return True
