'use client'
import React from 'react'

const S = {
  bg: '#08080f',
  bgCard: '#0f0f1c',
  border: 'rgba(255,255,255,0.07)',
  borderBright: 'rgba(255,255,255,0.14)',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  textMuted: '#475569',
  success: '#10b981',
}

const METRICS = [
  { label: 'Today\'s Appointments', value: '24', delta: '+12%', icon: '📅', glow: 'rgba(99,102,241,0.15)', numColor: '#a5b4fc' },
  { label: 'Weekly Revenue', value: '$3,840', delta: '+8%', icon: '💰', glow: 'rgba(16,185,129,0.15)', numColor: '#6ee7b7' },
  { label: 'Active Clients', value: '312', delta: '+5%', icon: '👥', glow: 'rgba(6,182,212,0.15)', numColor: '#67e8f9' },
  { label: 'Staff Occupancy', value: '87%', delta: '+3%', icon: '⚡', glow: 'rgba(245,158,11,0.15)', numColor: '#fcd34d' },
]

const APPTS = [
  { client: 'Sofia Ramírez', service: 'Full Haircut', staff: 'Carlos', time: '10:00 AM', status: 'confirmed', initials: 'SR', hue: 250 },
  { client: 'James Wilson', service: 'Beard Trim', staff: 'Luis', time: '10:30 AM', status: 'confirmed', initials: 'JW', hue: 190 },
  { client: 'Ana Torres', service: 'Color & Style', staff: 'Maria', time: '11:00 AM', status: 'pending', initials: 'AT', hue: 300 },
  { client: 'Michael Chen', service: 'Consultation', staff: 'Carlos', time: '12:30 PM', status: 'confirmed', initials: 'MC', hue: 160 },
  { client: 'Lucia Gómez', service: 'Full Haircut', staff: 'Luis', time: '01:00 PM', status: 'pending', initials: 'LG', hue: 340 },
]

const STATUS: Record<string, {bg: string, color: string, label: string}> = {
  confirmed: { bg: 'rgba(16,185,129,0.13)', color: '#6ee7b7', label: '● Confirmed' },
  pending: { bg: 'rgba(245,158,11,0.13)', color: '#fcd34d', label: '● Pending' },
}

const STAFF_OCC = [
  { name: 'Carlos Mendez', pct: 92, color: '#6366f1' },
  { name: 'Luis Pereira', pct: 74, color: '#06b6d4' },
  { name: 'Maria Santos', pct: 85, color: '#10b981' },
]

const QUICK = [
  { icon: '➕', label: 'New Appointment' },
  { icon: '👤', label: 'Add Staff Member' },
  { icon: '🔌', label: 'Get Embed Code' },
  { icon: '📊', label: 'Export Report' },
]

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: "'Inter', sans-serif", color: S.textPrimary }}>

      {/* Page Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 5 }}>Good morning, Admin 👋</h1>
          <p style={{ color: S.textSecondary, fontSize: 14 }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} · Here&apos;s your business at a glance.
          </p>
        </div>
        <button style={{
          background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
          color: 'white', border: 'none', padding: '10px 20px', borderRadius: 9,
          fontSize: 14, fontWeight: 600, cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
        }}>+ New Appointment</button>
      </div>

      {/* Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {METRICS.map((m, i) => (
          <div key={i} style={{
            background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 16, padding: '22px 20px',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = S.borderBright; el.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = S.border; el.style.transform = 'translateY(0)'; }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: m.glow, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{m.icon}</div>
              <span style={{ fontSize: 11, fontWeight: 700, color: S.success, background: 'rgba(16,185,129,0.12)', padding: '3px 10px', borderRadius: 100 }}>{m.delta}</span>
            </div>
            <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-1px', color: m.numColor, lineHeight: 1, marginBottom: 5 }}>{m.value}</div>
            <div style={{ fontSize: 12, color: S.textMuted, fontWeight: 500 }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
        {/* Appointments Table */}
        <div style={{ background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 16, overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: `1px solid ${S.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: 15, fontWeight: 700 }}>Today&apos;s Appointments</h2>
            <button style={{ background: 'transparent', border: `1px solid ${S.border}`, color: S.textSecondary, padding: '6px 14px', borderRadius: 7, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>View all</button>
          </div>
          {APPTS.map((a, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '13px 22px',
              borderBottom: i < APPTS.length - 1 ? `1px solid ${S.border}` : 'none',
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: `hsla(${a.hue}, 60%, 20%, 1)`,
                border: `1px solid hsla(${a.hue}, 60%, 35%, 0.8)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, color: `hsl(${a.hue}, 80%, 75%)`,
              }}>{a.initials}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{a.client}</div>
                <div style={{ fontSize: 12, color: S.textMuted }}>{a.service} · {a.staff}</div>
              </div>
              <div style={{ fontSize: 12, color: S.textSecondary, flexShrink: 0, marginRight: 12 }}>{a.time}</div>
              <div style={{ padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 600, background: STATUS[a.status].bg, color: STATUS[a.status].color, flexShrink: 0 }}>
                {STATUS[a.status].label}
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Quick Actions */}
          <div style={{ background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 16, padding: '18px 16px' }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: S.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Quick Actions</div>
            {QUICK.map((q, i) => (
              <button key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                padding: '10px 12px', borderRadius: 9,
                background: 'transparent', border: 'none', color: S.textSecondary,
                fontSize: 13, fontWeight: 500, cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.15s', marginBottom: i < QUICK.length - 1 ? 3 : 0,
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.05)'; el.style.color = S.textPrimary; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = S.textSecondary; }}
              >
                <span style={{ fontSize: 15 }}>{q.icon}</span>{q.label}
              </button>
            ))}
          </div>

          {/* Staff Occupancy */}
          <div style={{ background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 16, padding: '18px 16px' }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: S.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Staff Occupancy</div>
            {STAFF_OCC.map((s, i) => (
              <div key={i} style={{ marginBottom: i < STAFF_OCC.length - 1 ? 16 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 7 }}>
                  <span style={{ fontWeight: 500 }}>{s.name}</span>
                  <span style={{ color: S.textMuted, fontWeight: 600 }}>{s.pct}%</span>
                </div>
                <div style={{ height: 5, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${s.pct}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}cc)`, borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
