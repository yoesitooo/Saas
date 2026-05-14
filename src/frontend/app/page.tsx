'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import '../globals.css'

const NICHES = [
  { icon: '✂️', label: 'Barbershops' },
  { icon: '🏥', label: 'Clinics' },
  { icon: '👁️', label: 'Opticals' },
  { icon: '💆', label: 'Spas' },
  { icon: '🦷', label: 'Dentists' },
  { icon: '🏋️', label: 'Gyms' },
]

const STATS = [
  { value: '10k+', label: 'Appointments Booked' },
  { value: '500+', label: 'Businesses Live' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '< 2s', label: 'Booking Time' },
]

const FEATURES = [
  {
    icon: '⚡',
    title: 'Instant Booking',
    desc: 'Clients book in under 60 seconds. No friction, no dropoff. Real-time availability synced automatically.',
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    icon: '📅',
    title: 'Google Calendar Sync',
    desc: 'Every appointment auto-syncs to your staff calendar. No double bookings, ever.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: '📩',
    title: 'Smart Notifications',
    desc: 'Automated confirmations and 24h reminders slash no-shows by 60% on average.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: '🔌',
    title: 'Embed Anywhere',
    desc: 'Two lines of code. Your booking system lives on any website, instantly branded to your client.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: '🔒',
    title: 'Multi-Tenant Isolation',
    desc: 'Every business gets a dedicated namespace. Zero data leakage. Built-in RLS from day one.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: '📊',
    title: 'Live Analytics',
    desc: 'Occupancy rates, revenue per seat, and churn signals — all on one dashboard, live.',
    gradient: 'from-amber-500 to-yellow-500',
  },
]

export default function LandingPage() {
  const [currentNiche, setCurrentNiche] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNiche(n => (n + 1) % NICHES.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--bg)', color: 'var(--text-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ===== NAV ===== */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(9, 9, 15, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 800, color: 'white'
            }}>H</div>
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px' }}>horum</span>
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {['Features', 'Pricing', 'Docs'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >{item}</a>
            ))}
            <Link href="/login" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Login</Link>
            <Link href="/register" className="btn-primary btn-sm">Start free →</Link>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '140px 24px 80px', position: 'relative' }}>
        {/* Background orbs */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '20%', left: '15%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          {/* Grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div style={{ maxWidth: 800, position: 'relative' }} className="animate-fade-up">
          <div className="badge badge-primary" style={{ marginBottom: 24, display: 'inline-flex' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1', animation: 'pulse 2s infinite' }} />
            White-Label SaaS · Now in Open Beta
          </div>

          <h1 style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 24 }}>
            Booking software for{' '}
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #a5b4fc, #6366f1, #06b6d4)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              minWidth: 280,
            }}>
              {NICHES[currentNiche].icon} {NICHES[currentNiche].label}
            </span>
          </h1>

          <p style={{ fontSize: 20, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
            A fully white-labeled scheduling engine. Deploy under your brand in minutes. Your clients will never know it's not custom-built.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
              Get Started Free →
            </Link>
            <Link href="/booking/demo" className="btn-secondary" style={{ fontSize: 16, padding: '14px 32px' }}>
              See Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--border)', borderRadius: 20, overflow: 'hidden' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ background: 'var(--bg-card)', padding: '36px 24px', textAlign: 'center' }}>
              <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-1px', background: 'linear-gradient(135deg, #fff, #a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" style={{ padding: '0 24px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="badge badge-primary" style={{ marginBottom: 16, display: 'inline-flex' }}>Features</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-1px' }}>Everything you need to<br/>run a scheduling business</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {FEATURES.map((f, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, marginBottom: 18, fontSize: 22,
                  background: `linear-gradient(135deg, ${f.gradient.includes('violet') ? 'rgba(139,92,246,0.2)' : f.gradient.includes('cyan') ? 'rgba(6,182,212,0.2)' : f.gradient.includes('emerald') ? 'rgba(16,185,129,0.2)' : f.gradient.includes('orange') ? 'rgba(249,115,22,0.2)' : f.gradient.includes('pink') ? 'rgba(236,72,153,0.2)' : 'rgba(245,158,11,0.2)'}, transparent)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EMBED CTA ===== */}
      <section style={{ padding: '0 24px 120px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 28, padding: '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1), transparent 60%)', pointerEvents: 'none' }} />
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 16 }}>
            Add booking to any website<br/>with 2 lines of code
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 36, fontSize: 16 }}>Hand your clients a snippet. They paste it. Done.</p>
          <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px 24px', textAlign: 'left', fontFamily: 'monospace', fontSize: 14, color: '#a5b4fc', marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}>
            <span style={{ color: 'var(--text-muted)' }}>{`<!-- Paste this on any website -->`}</span><br/>
            {'<script src="https://horum-booking.vercel.app/widget.js"'}<br/>
            {'  data-branch-id="your-branch-id"></script>'}
          </div>
          <Link href="/register" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>Start for free →</Link>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 13 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: 6, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: 'white' }}>H</div>
          <span style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>horum</span>
        </div>
        <p>© 2025 Horum SaaS · Built for appointment-driven businesses worldwide</p>
      </footer>
    </div>
  )
}
