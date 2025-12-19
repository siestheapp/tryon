"""
Database configuration for scrapers.

Reads from environment variables. Set these in your shell or in a .env file:
  - DB_HOST (or uses Supabase project URL)
  - DB_PORT (default: 5432)
  - DB_NAME (default: postgres)
  - DB_USER (default: postgres)
  - DB_PASSWORD (required - get from Supabase dashboard)

For Supabase projects, the host is: db.<project-id>.supabase.co
"""

import os
from pathlib import Path

# Try to load from .env file in project root
try:
    from dotenv import load_dotenv
    env_path = Path(__file__).resolve().parent.parent / ".env"
    load_dotenv(env_path)
except ImportError:
    pass

# Extract project ID from Supabase URL if available
supabase_url = os.getenv("EXPO_PUBLIC_SUPABASE_URL", "")
project_id = ""
if "supabase.co" in supabase_url:
    # Extract project ID from URL like https://xxxxx.supabase.co
    project_id = supabase_url.replace("https://", "").split(".")[0]

# Build default host from project ID
default_host = f"db.{project_id}.supabase.co" if project_id else "localhost"

DB_CONFIG = {
    "host": os.getenv("DB_HOST", default_host),
    "port": os.getenv("DB_PORT", "5432"),
    "database": os.getenv("DB_NAME", "postgres"),
    "user": os.getenv("DB_USER", "postgres"),
    "password": os.getenv("DB_PASSWORD", ""),
}

# For debugging
if __name__ == "__main__":
    print("Database configuration:")
    for key, value in DB_CONFIG.items():
        if key == "password":
            print(f"  {key}: {'*' * len(value) if value else '(not set)'}")
        else:
            print(f"  {key}: {value}")
