from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "White-Label Booking SaaS"
    API_V1_STR: str = "/api/v1"
    BACKEND_URL: str = "http://localhost:8000"
    
    # Supabase / DB Config
    SUPABASE_URL: str = ""
    SUPABASE_KEY: str = ""
    DATABASE_URL: str = ""
    
    # Security
    SECRET_KEY: str = "development_secret_key_change_me"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    
    # CORS
    BACKEND_CORS_ORIGINS: List[str] = ["*"]

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
