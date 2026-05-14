'use client'
import { useState } from 'react'
import Link from 'next/link'

const S = {
  bg: '#08080f',
  bgCard: '#0f0f1c',
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
}

const PLANS = [
  { id: 'starter', label: 'Starter', sub: 'Free forever', color: S.primary },
  { id: 'pro', label: 'Pro', sub: '$29 / mo', color: '#06b6d4' },
  { id: 'agency', label: 'Agency', sub: '$99 / mo', color: '#8b5cf6' },
]

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [plan, setPlan] = useState('starter')
  const [form, setForm] = useState({ business: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1600))
    setLoading(false)
    setStep(2)
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focusedField === field ? 'rgba(99,102,241,0.6)' : S.border}`,
    borderRadius: 12,
    color: S.textPrimary,
    fontSize: 15,
    outline: 'none',
    transition: 'all 0.25s',
    boxSizing: 'border-box',
    boxShadow: focusedField === field ? '0 0 0 3px rgba(99,102,241,0.12)' : 'none',
  })

  return (
    <div style={{
      background: S.bg,
      color: S.textPrimary,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 16px 40px',
    }}>

      {/* Ambient orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-15%', right: '-5%',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 65%)',
          borderRadius: '50%', filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 65%)',
          borderRadius: '50%', filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '40%',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)',
          borderRadius: '50%', filter: 'blur(40px)',
        }} />
        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }} />
      </div>

      {/* Logo */}
      <Link href="/" style={{
        position: 'fixed', top: 28, left: 32,
        display: 'flex', alignItems: 'center', gap: 10,
        textDecoration: 'none',
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: 9,
          background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: 'white',
        }}>H</div>
        <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-0.5px', color: S.textPrimary }}>horum</span>
      </Link>

      {step === 1 ? (
        /* ── STEP 1: Form ── */
        <div style={{
          position: 'relative', zIndex: 10,
          width: '100%', maxWidth: 460,
          background: 'rgba(15,15,28,0.80)',
          border: `1px solid ${S.borderBright}`,
          borderRadius: 24,
          padding: '40px 36px',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset',
          animation: 'fadeUp 0.55s ease both',
        }}>

          {/* Progress bar */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              {['Account', 'Plan', 'Done'].map((label, i) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: i === 0
                      ? 'linear-gradient(135deg, #6366f1, #06b6d4)'
                      : 'rgba(255,255,255,0.06)',
                    border: `1px solid ${i === 0 ? 'transparent' : S.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700,
                    color: i === 0 ? 'white' : S.textMuted,
                    transition: 'all 0.3s',
                  }}>{i + 1}</div>
                  <span style={{ fontSize: 12, color: i === 0 ? S.textSecondary : S.textMuted, fontWeight: 500 }}>
                    {label}
                  </span>
                  {i < 2 && <div style={{ width: 28, height: 1, background: S.border, margin: '0 4px' }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 18,
              background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.28)',
              borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: S.primaryLight,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: S.primary, display: 'inline-block', animation: 'pulse 2s infinite' }} />
              White-Label SaaS · Open Beta
            </div>
            <h1 style={{ fontSize: 27, fontWeight: 900, letterSpacing: '-1px', marginBottom: 7 }}>
              Create your account
            </h1>
            <p style={{ color: S.textSecondary, fontSize: 14, lineHeight: 1.6 }}>
              Launch your booking platform in minutes. No credit card required.
            </p>
          </div>

          {/* Plan selector */}
          <div style={{ marginBottom: 22 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: S.textSecondary, marginBottom: 10 }}>
              Choose your plan
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {PLANS.map(p => (
                <button
                  key={p.id}
                  id={`plan-${p.id}`}
                  type="button"
                  onClick={() => setPlan(p.id)}
                  style={{
                    padding: '10px 8px',
                    background: plan === p.id ? `rgba(${p.id === 'starter' ? '99,102,241' : p.id === 'pro' ? '6,182,212' : '139,92,246'},0.15)` : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${plan === p.id ? p.color : S.border}`,
                    borderRadius: 10, cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, color: plan === p.id ? p.color : S.textSecondary }}>{p.label}</div>
                  <div style={{ fontSize: 10, color: S.textMuted, marginTop: 2 }}>{p.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: S.textSecondary, marginBottom: 8 }}>
                Business name
              </label>
              <input
                id="reg-business"
                type="text"
                placeholder="Bella Vista Barbershop"
                value={form.business}
                onChange={set('business')}
                onFocus={() => setFocusedField('business')}
                onBlur={() => setFocusedField(null)}
                style={inputStyle('business')}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: S.textSecondary, marginBottom: 8 }}>
                Email address
              </label>
              <input
                id="reg-email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={set('email')}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                style={inputStyle('email')}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: S.textSecondary, marginBottom: 8 }}>
                Password
              </label>
              <input
                id="reg-password"
                type="password"
                placeholder="Min 8 characters"
                value={form.password}
                onChange={set('password')}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                style={inputStyle('password')}
                minLength={8}
                required
              />
              {/* Password strength */}
              {form.password.length > 0 && (
                <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{
                      flex: 1, height: 3, borderRadius: 4,
                      background: form.password.length >= i * 2
                        ? i <= 1 ? '#ef4444' : i <= 2 ? '#f59e0b' : i <= 3 ? S.primary : S.success
                        : S.border,
                      transition: 'background 0.3s',
                    }} />
                  ))}
                </div>
              )}
            </div>

            <button
              id="reg-submit"
              type="submit"
              disabled={loading}
              style={{
                marginTop: 4,
                width: '100%', padding: '14px',
                background: loading
                  ? 'rgba(99,102,241,0.5)'
                  : 'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #06b6d4 100%)',
                color: 'white', border: 'none',
                borderRadius: 12, fontSize: 15, fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.25s',
                boxShadow: loading ? 'none' : '0 6px 28px rgba(99,102,241,0.42)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              }}
              onMouseEnter={e => {
                if (!loading) {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 10px 36px rgba(99,102,241,0.55)'
                }
              }}
              onMouseLeave={e => {
                if (!loading) {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px rgba(99,102,241,0.42)'
                }
              }}
            >
              {loading ? (
                <>
                  <span style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} />
                  Creating account…
                </>
              ) : 'Create free account →'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 20, color: S.textMuted, fontSize: 12, lineHeight: 1.6 }}>
            By creating an account you agree to our{' '}
            <a href="#" style={{ color: S.primaryLight, textDecoration: 'none' }}>Terms</a> &amp;{' '}
            <a href="#" style={{ color: S.primaryLight, textDecoration: 'none' }}>Privacy Policy</a>
          </p>

          {/* Footer */}
          <p style={{ textAlign: 'center', marginTop: 20, color: S.textMuted, fontSize: 13 }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: S.primaryLight, fontWeight: 600, textDecoration: 'none' }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = S.accent)}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = S.primaryLight)}
            >
              Sign in
            </Link>
          </p>
        </div>
      ) : (
        /* ── STEP 2: Success ── */
        <div style={{
          position: 'relative', zIndex: 10,
          width: '100%', maxWidth: 440,
          background: 'rgba(15,15,28,0.80)',
          border: `1px solid rgba(16,185,129,0.35)`,
          borderRadius: 24,
          padding: '52px 36px',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
          textAlign: 'center',
          animation: 'fadeUp 0.55s ease both',
        }}>
          <div style={{
            width: 64, height: 64,
            background: 'rgba(16,185,129,0.12)',
            border: '1px solid rgba(16,185,129,0.4)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, margin: '0 auto 24px',
          }}>✓</div>
          <h1 style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 10 }}>
            You&apos;re all set!
          </h1>
          <p style={{ color: S.textSecondary, fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            Your account has been created. Check your inbox to confirm your email and activate your platform.
          </p>
          <Link href="/login" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            color: 'white', padding: '13px 32px', borderRadius: 12,
            fontSize: 15, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 6px 28px rgba(99,102,241,0.4)',
          }}>Go to Dashboard →</Link>
          <p style={{ color: S.textMuted, fontSize: 12, marginTop: 20 }}>
            Didn&apos;t receive the email?{' '}
            <a href="#" style={{ color: S.primaryLight, textDecoration: 'none' }}>Resend</a>
          </p>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        ::placeholder { color: rgba(148,163,184,0.45); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
