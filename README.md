# Horum: White-Label Booking SaaS

A niche-agnostic, premium appointment scheduling platform built with Next.js 14, FastAPI, and Supabase.

## 🚀 Quick Start

### 1. Database Setup
- Create a project in [Supabase](https://supabase.com).
- Run the migration script found in `supabase/migrations/001_initial_schema.sql` in your Supabase SQL Editor.

### 2. Backend Setup
```bash
cd src/backend
python -m venv venv
source venv/bin/activate # or venv\Scripts\activate on Windows
pip install -r requirements.txt
cp ../../.env.example .env
uvicorn app.main:app --reload
```

### 3. Frontend Setup
```bash
cd src/frontend
npm install
cp ../../.env.example .env.local
npm run dev
```

## 🛠 Features
- **Multi-tenancy:** Isolated data for every business.
- **Google Calendar Sync:** Automated event creation for staff.
- **Premium UI:** Glassmorphism and modern design system.
- **Web Widget:** Embed the booking flow on any website.

## 🐳 Docker
To run everything with Docker:
```bash
docker-compose up --build
```
