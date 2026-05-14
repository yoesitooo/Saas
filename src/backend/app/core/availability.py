from datetime import datetime, timedelta, time
from typing import List, Tuple

def get_available_slots(
    day_start: time,
    day_end: time,
    duration_minutes: int,
    existing_appointments: List[Tuple[datetime, datetime]]
) -> List[datetime]:
    """
    Calculates available time slots for a given day.
    """
    slots = []
    current_time = datetime.combine(datetime.today(), day_start)
    end_limit = datetime.combine(datetime.today(), day_end)
    
    while current_time + timedelta(minutes=duration_minutes) <= end_limit:
        slot_start = current_time
        slot_end = current_time + timedelta(minutes=duration_minutes)
        
        # Check if slot overlaps with any existing appointment
        overlap = False
        for app_start, app_end in existing_appointments:
            # Overlap check logic
            if (slot_start < app_end) and (slot_end > app_start):
                overlap = True
                break
        
        if not overlap:
            slots.append(slot_start)
            
        current_time += timedelta(minutes=duration_minutes)
        
    return slots
