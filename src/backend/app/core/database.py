from supabase import create_client, Client
from app.core.config import settings
import functools

@functools.lru_cache()
def get_supabase() -> Client:
    return create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

# Dependency for FastAPI
def get_db():
    db = get_supabase()
    try:
        yield db
    finally:
        pass
