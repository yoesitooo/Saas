from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship
import uuid

class Business(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str
    slug: str = Field(unique=True, index=True)
    logo_url: Optional[str] = None
    
    branches: List["Branch"] = Relationship(back_populates="business")

class Branch(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str
    address: str
    business_id: uuid.UUID = Field(foreign_key="business.id")
    
    business: Business = Relationship(back_populates="branches")
    staff: List["Staff"] = Relationship(back_populates="branch")

class Staff(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str
    email: str
    branch_id: uuid.UUID = Field(foreign_key="branch.id")
    business_id: uuid.UUID = Field(index=True) # For isolation
    
    branch: Branch = Relationship(back_populates="staff")
    appointments: List["Appointment"] = Relationship(back_populates="staff")

class Service(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    name: str
    description: Optional[str] = None
    price: float
    duration_minutes: int
    business_id: uuid.UUID = Field(index=True)

class Appointment(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    start_time: str # ISO format
    end_time: str
    client_name: str
    client_email: str
    staff_id: uuid.UUID = Field(foreign_key="staff.id")
    service_id: uuid.UUID = Field(foreign_key="service.id")
    business_id: uuid.UUID = Field(index=True)
    
    staff: Staff = Relationship(back_populates="appointments")
