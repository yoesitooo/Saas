'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const S = {
  bg: '#08080f',
  bgCard: '#0f0f1c',
  bgCardHover: '#141428',
  border: 'rgba(255,255,255,0.07)',
  borderBright: 'rgba(255,255,255,0.14)',
  primary: '#6366f1',
  primaryDark: '#4f46e5',
  primaryLight: '#a5b4fc',
  accent: '#06b6d4',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  textMuted: '#475569',
  success: '#10b981',
  warning: '#f59e0b',
}

const NICHES = ['Barbershops ✂️', 'Clinics 🏥', 'Opticals 👁️', 'Spas 💆', 'Dentists 🦷', 'Gyms 🏋️']

const STATS = [
  { v: '10k+', l: 'Appointments Booked' },
  { v: '500+', l: 'Businesses Powered' },
  { v: '99.9%', l: 'Uptime Guaranteed' },
  { v: '<2s', l: 'Avg Booking Time' },
]

const FEATURES = [
  { icon: '⚡', title: 'Instant Booking', desc: 'Clients confirm appointments in under 60 seconds. Real-time slot availability, zero friction.', color: '#6366f1' },
  { icon: '📅', title: 'Calendar Sync', desc: 'Auto-sync every appointment to Google Calendar. No double bookings, ever.', color: '#06b6d4' },
  { icon: '📩', title: 'Smart Notifications', desc: 'Automatic confirmations and 24h reminders reduce no-shows by up to 60%.', color: '#10b981' },
  { icon: '🔌', title: 'Embeddable Widget', desc: 'Two lines of code. Your booking system lives on any client website instantly.', color: '#f59e0b' },
  { icon: '🔒', title: 'Multi-Tenant Security', desc: 'Every business is fully isolated. Built-in Row Level Security from day one.', color: '#ec4899' },
  { icon: '📊', title: 'Live Analytics', desc: 'Revenue per seat, occupancy rates, and churn signals on one live dashboard.', color: '#8b5cf6' },
]

const TESTIMONIALS = [
  { quote: 'Went from 0 to 200 bookings in the first month. My clients love how easy it is.', name: 'Carlos M.', role: 'Barbershop Owner' },
  { quote: 'We replaced our manual calendar. Reminders alone recovered 40% of missed revenue.', name: 'Dr. Lucía V.', role: 'Dental Clinic' },
  { quote: 'I resell this to my clients as a branded product. Incredible margins.', name: 'Felipe R.', role: 'SaaS Reseller' },
]

export default function LandingPage() {
  const [niche, setNiche] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setNiche(n => (n + 1) % NICHES.length), 2500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div style={{ background: S.bg, color: S.textPrimary, minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 5%', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(8,8,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${S.border}` : 'none',
        transition: 'all 0.3s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: 18, color: 'white',
          }}>H</div>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.5px' }}>horum</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {['Features', 'Pricing', 'Docs'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ color: S.textSecondary, fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = S.textPrimary)}
              onMouseLeave={e => (e.currentTarget.style.color = S.textSecondary)}
            >{item}</a>
          ))}
          <Link href="/login" style={{ color: S.textSecondary, fontSize: 14, fontWeight: 500 }}>Login</Link>
          <Link href="/register" style={{
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            color: 'white', padding: '9px 20px', borderRadius: 8,
            fontSize: 14, fontWeight: 600,
            boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px rgba(99,102,241,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(99,102,241,0.4)'; }}
          >Start free →</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '120px 5% 80px', textAlign: 'center' }}>
        {/* Ambient orbs */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '10%', left: '5%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 65%)', borderRadius: '50%', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)', borderRadius: '50%', filter: 'blur(60px)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`, backgroundSize: '70px 70px' }} />
        </div>

        <div style={{ maxWidth: 820, position: 'relative', animation: 'fadeUp 0.8s ease both' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
            background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: 100, padding: '6px 16px', fontSize: 13, fontWeight: 600, color: S.primaryLight,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6366f1', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            White-Label SaaS · Open Beta
          </div>

          <h1 style={{ fontSize: 'clamp(44px, 7vw, 82px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-3px', marginBottom: 20 }}>
            Scheduling software<br />for{' '}
            <span style={{
              background: 'linear-gradient(135deg, #a5b4fc 0%, #6366f1 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{NICHES[niche]}</span>
          </h1>

          <p style={{ fontSize: 19, color: S.textSecondary, maxWidth: 540, margin: '0 auto 44px', lineHeight: 1.75 }}>
            A complete white-label booking engine. Deploy under your brand in minutes and start earning recurring revenue.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" style={{
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              color: 'white', padding: '15px 34px', borderRadius: 12, fontSize: 16, fontWeight: 700,
              boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
            }}>Get started free →</Link>
            <Link href="/booking/demo" style={{
              background: 'rgba(255,255,255,0.05)', border: `1px solid ${S.borderBright}`,
              color: S.textPrimary, padding: '15px 34px', borderRadius: 12, fontSize: 16, fontWeight: 600,
            }}>See live demo</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '0 5% 100px' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 20, overflow: 'hidden',
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: '40px 24px', textAlign: 'center', borderRight: i < 3 ? `1px solid ${S.border}` : 'none' }}>
              <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: '-2px', background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.v}</div>
              <div style={{ color: S.textMuted, fontSize: 13, marginTop: 6, fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '0 5% 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16, background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, padding: '5px 16px', fontSize: 12, fontWeight: 700, color: S.primaryLight, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Features</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-1px' }}>Everything to run<br />a scheduling business</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 18, padding: 28,
                transition: 'all 0.25s',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = S.borderBright
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = S.border
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ color: S.textSecondary, fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '0 5% 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, letterSpacing: '-0.5px' }}>Trusted by businesses<br />across all niches</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 18, padding: 28 }}>
                <div style={{ color: '#fcd34d', fontSize: 20, marginBottom: 16 }}>★★★★★</div>
                <p style={{ color: S.textSecondary, fontSize: 15, lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ color: S.textMuted, fontSize: 13 }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMBED CTA */}
      <section style={{ padding: '0 5% 120px' }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(6,182,212,0.08) 100%)',
          border: `1px solid rgba(99,102,241,0.25)`,
          borderRadius: 28, padding: '64px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 14 }}>
            Add booking to any website<br />with 2 lines of code
          </h2>
          <p style={{ color: S.textSecondary, marginBottom: 36, fontSize: 16 }}>Hand your clients a snippet. They paste it. Done.</p>
          <div style={{
            background: 'rgba(0,0,0,0.6)', border: `1px solid ${S.border}`,
            borderRadius: 12, padding: '20px 24px', fontFamily: 'monospace', fontSize: 14,
            color: '#a5b4fc', maxWidth: 600, margin: '0 auto 36px', textAlign: 'left',
          }}>
            <span style={{ color: S.textMuted }}>{`<!-- Add to your website -->`}</span><br />
            {'<script src="https://horum-booking.vercel.app/widget.js"'}<br />
            {'  data-branch-id="YOUR_BRANCH_ID"></script>'}
          </div>
          <Link href="/register" style={{
            display: 'inline-block', background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            color: 'white', padding: '14px 32px', borderRadius: 12, fontSize: 16, fontWeight: 700,
            boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
          }}>Start for free →</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${S.border}`, padding: '44px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900, color: 'white' }}>H</div>
          <span style={{ fontWeight: 700 }}>horum</span>
        </div>
        <p style={{ color: S.textMuted, fontSize: 13 }}>© 2025 Horum SaaS · Built for appointment-driven businesses</p>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Privacy', 'Terms', 'Support'].map(l => (
            <a key={l} href="#" style={{ color: S.textMuted, fontSize: 13, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = S.textPrimary)}
              onMouseLeave={e => (e.currentTarget.style.color = S.textMuted)}
            >{l}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}
