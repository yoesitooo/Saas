'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const S = {
  bg: '#08080f',
  bgSecondary: '#0c0c18',
  bgCard: '#0f0f1c',
  border: 'rgba(255,255,255,0.07)',
  borderBright: 'rgba(255,255,255,0.14)',
  primary: '#6366f1',
  primaryLight: '#a5b4fc',
  accent: '#06b6d4',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  textMuted: '#475569',
}

const NAV = [
  { href: '', icon: '◉', label: 'Overview' },
  { href: '/branches', icon: '🏢', label: 'Branches' },
  { href: '/staff', icon: '👥', label: 'Staff' },
  { href: '/services', icon: '🛠️', label: 'Services' },
  { href: '/appointments', icon: '📅', label: 'Appointments' },
  { href: '/analytics', icon: '📊', label: 'Analytics' },
  { href: '/settings', icon: '⚙️', label: 'Settings' },
]

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { business_slug: string }
}) {
  const [collapsed, setCollapsed] = useState(false)
  const slug = params.business_slug
  const W = collapsed ? 68 : 248

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: S.bg, fontFamily: "'Inter', sans-serif" }}>
      {/* SIDEBAR */}
      <aside style={{
        width: W, flexShrink: 0, position: 'fixed', inset: '0 auto 0 0',
        background: S.bgSecondary, borderRight: `1px solid ${S.border}`,
        display: 'flex', flexDirection: 'column',
        transition: 'width 0.25s cubic-bezier(0.4,0,0.2,1)',
        zIndex: 50, overflow: 'hidden',
      }}>
        {/* Logo */}
        <div style={{ padding: collapsed ? '20px 16px' : '20px 20px 20px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1px solid ${S.border}`, minHeight: 65 }}>
          <button
            onClick={() => setCollapsed(c => !c)}
            style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, fontWeight: 900, color: 'white',
            }}>H</button>
          {!collapsed && <div>
            <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: '-0.3px' }}>horum</div>
            <div style={{ fontSize: 11, color: S.textMuted, textTransform: 'capitalize' }}>{slug.replace(/-/g, ' ')}</div>
          </div>}
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 3 }}>
          {NAV.map((item) => {
            const href = `/${slug}${item.href}`
            return (
              <Link key={item.label} href={href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: collapsed ? '10px 14px' : '10px 12px',
                  borderRadius: 9,
                  color: S.textSecondary,
                  fontSize: 14, fontWeight: 500,
                  transition: 'all 0.15s',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(255,255,255,0.05)'
                    el.style.color = S.textPrimary
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'transparent'
                    el.style.color = S.textSecondary
                  }}
                >
                  <span style={{ fontSize: 15, flexShrink: 0 }}>{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Pro badge */}
        {!collapsed && (
          <div style={{ padding: '12px 12px 20px' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.1))',
              border: '1px solid rgba(99,102,241,0.2)', borderRadius: 12, padding: '14px 16px',
            }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: S.primaryLight, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3 }}>Pro Plan</div>
              <div style={{ fontSize: 12, color: S.textSecondary }}>5 branches · Unlimited staff</div>
            </div>
          </div>
        )}
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, marginLeft: W, transition: 'margin-left 0.25s cubic-bezier(0.4,0,0.2,1)', minWidth: 0 }}>
        {/* Topbar */}
        <header style={{
          height: 62, background: S.bg, borderBottom: `1px solid ${S.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 28px', position: 'sticky', top: 0, zIndex: 40,
        }}>
          <div style={{ display: 'flex', gap: 6, fontSize: 13, color: S.textMuted, alignItems: 'center' }}>
            <span>horum</span><span>›</span>
            <span style={{ color: S.textPrimary, fontWeight: 600, textTransform: 'capitalize' }}>{slug.replace(/-/g, ' ')}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button style={{
              width: 34, height: 34, borderRadius: 8, border: `1px solid ${S.border}`,
              background: 'transparent', cursor: 'pointer', color: S.textSecondary,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15
            }}>🔔</button>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 700, color: 'white', cursor: 'pointer',
            }}>A</div>
          </div>
        </header>

        <div style={{ padding: '28px 28px', animation: 'fadeIn 0.4s ease both' }}>
          {children}
        </div>
      </main>
    </div>
  )
}
