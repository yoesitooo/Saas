from pydantic import BaseModel, EmailStr
from typing import Optional, List
from uuid import UUID

class BusinessBase(BaseModel):
    name: str
    slug: str

class BusinessCreate(BusinessBase):
    pass

class BusinessRead(BusinessBase):
    id: UUID

class BranchBase(BaseModel):
    name: str
    address: str
    business_id: UUID

class BranchCreate(BranchBase):
    pass

class StaffBase(BaseModel):
    name: str
    email: EmailStr
    branch_id: UUID

class StaffCreate(StaffBase):
    pass

class ServiceBase(BaseModel):
    name: str
    price: float
    duration_minutes: int

class AppointmentBase(BaseModel):
    start_time: str
    client_name: str
    client_email: str
    staff_id: UUID
    service_id: UUID

class AppointmentCreate(AppointmentBase):
    pass
