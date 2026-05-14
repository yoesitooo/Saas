'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import '../../globals.css'

const NAV_ITEMS = [
  { href: '', icon: '◼', label: 'Overview' },
  { href: '/branches', icon: '🏢', label: 'Branches' },
  { href: '/staff', icon: '👥', label: 'Staff' },
  { href: '/services', icon: '🛠', label: 'Services' },
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

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)', fontFamily: 'var(--font-sans)' }}>
      
      {/* ===== SIDEBAR ===== */}
      <aside style={{
        width: collapsed ? 72 : 256,
        flexShrink: 0,
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0',
        position: 'fixed',
        top: 0, bottom: 0, left: 0,
        transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
        zIndex: 50,
        overflow: 'hidden',
      }}>
        {/* Logo */}
        <div style={{ padding: '0 20px 28px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0,
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16, fontWeight: 900, color: 'white', cursor: 'pointer',
          }} onClick={() => setCollapsed(!collapsed)}>H</div>
          {!collapsed && (
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: '-0.4px', whiteSpace: 'nowrap' }}>horum</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap', textTransform: 'capitalize' }}>
                {slug.replace(/-/g, ' ')}
              </div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_ITEMS.map((item) => {
            const href = `/${slug}${item.href}`
            const isActive = typeof window !== 'undefined' && window.location.pathname === href
            return (
              <Link key={item.label} href={href} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 12px', borderRadius: 10,
                  background: isActive ? 'rgba(99,102,241,0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(99,102,241,0.25)' : '1px solid transparent',
                  color: isActive ? '#a5b4fc' : 'var(--text-secondary)',
                  transition: 'all 0.15s',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-primary)'; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; } }}
                >
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
                  {!collapsed && <span style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</span>}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Bottom */}
        {!collapsed && (
          <div style={{ padding: '0 12px' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.1))',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: 12, padding: 16,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#a5b4fc', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pro Plan</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>5 branches · Unlimited staff</div>
            </div>
          </div>
        )}
      </aside>

      {/* ===== MAIN ===== */}
      <main style={{
        flex: 1,
        marginLeft: collapsed ? 72 : 256,
        transition: 'margin-left 0.3s cubic-bezier(0.4,0,0.2,1)',
        minWidth: 0,
      }}>
        {/* Top Bar */}
        <header style={{
          height: 64,
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 32px',
          position: 'sticky', top: 0, zIndex: 40,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: 13 }}>
            <span>horum</span>
            <span>›</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600, textTransform: 'capitalize' }}>{slug.replace(/-/g, ' ')}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button style={{ width: 36, height: 36, borderRadius: 8, background: 'transparent', border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔔</button>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 700, color: 'white', cursor: 'pointer'
            }}>A</div>
          </div>
        </header>

        {/* Page Content */}
        <div style={{ padding: '32px', minHeight: 'calc(100vh - 64px)' }} className="animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  )
}
