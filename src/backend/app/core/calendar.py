import requests
from datetime import datetime, timedelta
from app.core.config import settings

class GoogleCalendarClient:
    def __init__(self, access_token: str):
        self.access_token = access_token
        self.base_url = "https://www.googleapis.com/calendar/v3"

    def create_event(self, summary: str, description: str, start_time: datetime, end_time: datetime):
        """
        Creates an event in the user's primary calendar.
        """
        url = f"{self.base_url}/calendars/primary/events"
        headers = {
            "Authorization": f"Bearer {self.access_token}",
            "Content-Type": "application/json"
        }
        
        payload = {
            "summary": summary,
            "description": description,
            "start": {
                "dateTime": start_time.isoformat() + "Z",
                "timeZone": "UTC"
            },
            "end": {
                "dateTime": end_time.isoformat() + "Z",
                "timeZone": "UTC"
            }
        }
        
        response = requests.post(url, headers=headers, json=payload)
        if response.status_code == 200:
            return response.json()
        else:
            # Handle token refresh or errors
            return None
