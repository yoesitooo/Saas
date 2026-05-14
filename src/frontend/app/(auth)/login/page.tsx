'use client'
import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'

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
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      window.location.href = '/dashboard'
    } catch (err: any) {
      alert(err.message || 'Error signing in')
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) throw error
    } catch (err: any) {
      alert(err.message || 'Error signing in with Google')
    }
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
    }}>

      {/* Ambient orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '-5%',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 65%)',
          borderRadius: '50%', filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-5%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 65%)',
          borderRadius: '50%', filter: 'blur(60px)',
        }} />
        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }} />
      </div>

      {/* Logo top-left */}
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

      {/* Card */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: 420,
        margin: '0 16px',
        background: 'rgba(15,15,28,0.80)',
        border: `1px solid ${S.borderBright}`,
        borderRadius: 24,
        padding: '40px 36px',
        backdropFilter: 'blur(24px)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset',
        animation: 'fadeUp 0.55s ease both',
      }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20,
            background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.28)',
            borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 700, color: S.primaryLight,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: S.primary, display: 'inline-block' }} />
            Secure login
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-1px', marginBottom: 8 }}>
            Welcome back
          </h1>
          <p style={{ color: S.textSecondary, fontSize: 14, lineHeight: 1.6 }}>
            Sign in to your Horum dashboard to manage your bookings.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: S.textSecondary, marginBottom: 8 }}>
              Email address
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={inputStyle('email')}
              required
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: S.textSecondary }}>
                Password
              </label>
              <a href="#" style={{ fontSize: 12, color: S.primaryLight, textDecoration: 'none', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = S.accent)}
                onMouseLeave={e => (e.currentTarget.style.color = S.primaryLight)}
              >Forgot password?</a>
            </div>
            <input
              id="login-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              style={inputStyle('password')}
              required
            />
          </div>

          <button
            id="login-submit"
            type="submit"
            disabled={loading}
            style={{
              marginTop: 6,
              width: '100%',
              padding: '14px',
              background: loading
                ? 'rgba(99,102,241,0.5)'
                : 'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #06b6d4 100%)',
              color: 'white',
              border: 'none',
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.25s',
              boxShadow: loading ? 'none' : '0 6px 28px rgba(99,102,241,0.42)',
              letterSpacing: '0.01em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
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
                Signing in…
              </>
            ) : 'Sign in →'}
          </button>
        </form>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
          <div style={{ flex: 1, height: 1, background: S.border }} />
          <span style={{ color: S.textMuted, fontSize: 12, fontWeight: 500 }}>OR</span>
          <div style={{ flex: 1, height: 1, background: S.border }} />
        </div>

        {/* Google SSO placeholder */}
        <button
          id="login-google"
          type="button"
          onClick={handleGoogleLogin}
          style={{
            width: '100%', padding: '13px',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${S.border}`,
            borderRadius: 12, color: S.textPrimary,
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
            transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'
            ;(e.currentTarget as HTMLElement).style.borderColor = S.borderBright
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
            ;(e.currentTarget as HTMLElement).style.borderColor = S.border
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
            <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        {/* Footer */}
        <p style={{ textAlign: 'center', marginTop: 28, color: S.textMuted, fontSize: 13 }}>
          Don&apos;t have an account?{' '}
          <Link href="/register" style={{ color: S.primaryLight, fontWeight: 600, textDecoration: 'none' }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = S.accent)}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = S.primaryLight)}
          >
            Start for free →
          </Link>
        </p>
      </div>

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
