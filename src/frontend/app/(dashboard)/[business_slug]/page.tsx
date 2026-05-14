'use client'
import React from 'react'

const METRICS = [
  { label: 'Appointments Today', value: '24', delta: '+12%', icon: '📅', color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
  { label: 'Revenue This Week', value: '$3,840', delta: '+8.2%', icon: '💰', color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { label: 'Active Clients', value: '312', delta: '+5%', icon: '👥', color: '#06b6d4', bg: 'rgba(6,182,212,0.1)' },
  { label: 'Staff Occupancy', value: '87%', delta: '+3%', icon: '⚡', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
]

const APPOINTMENTS = [
  { client: 'Sofia Ramírez', service: 'Full Haircut', staff: 'Carlos', time: '10:00 AM', status: 'confirmed', avatar: 'SR' },
  { client: 'James Wilson', service: 'Beard Trim', staff: 'Luis', time: '10:30 AM', status: 'confirmed', avatar: 'JW' },
  { client: 'Ana Torres', service: 'Color & Style', staff: 'Maria', time: '11:00 AM', status: 'pending', avatar: 'AT' },
  { client: 'Michael Chen', service: 'Consultation', staff: 'Carlos', time: '12:30 PM', status: 'confirmed', avatar: 'MC' },
  { client: 'Lucia Gómez', service: 'Full Haircut', staff: 'Luis', time: '01:00 PM', status: 'pending', avatar: 'LG' },
]

const STATUS_STYLES: Record<string, {bg: string, color: string, label: string}> = {
  confirmed: { bg: 'rgba(16,185,129,0.15)', color: '#6ee7b7', label: 'Confirmed' },
  pending: { bg: 'rgba(245,158,11,0.15)', color: '#fcd34d', label: 'Pending' },
  cancelled: { bg: 'rgba(239,68,68,0.15)', color: '#fca5a5', label: 'Cancelled' },
}

const QUICK_ACTIONS = [
  { icon: '➕', label: 'New Appointment', color: '#6366f1' },
  { icon: '👤', label: 'Add Staff', color: '#06b6d4' },
  { icon: '🔌', label: 'Get Embed Code', color: '#10b981' },
  { icon: '📊', label: 'Export Report', color: '#f59e0b' },
]

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 6 }}>Good morning, Admin 👋</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} · Here&apos;s what&apos;s happening today.
          </p>
        </div>
        <button className="btn-primary">
          + New Appointment
        </button>
      </div>

      {/* Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {METRICS.map((m, i) => (
          <div key={i} className="card" style={{ padding: 24, animationDelay: `${i * 0.1}s` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{m.icon}</div>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '3px 10px', borderRadius: 100 }}>{m.delta}</span>
            </div>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-1px', color: m.color, marginBottom: 4 }}>{m.value}</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
        {/* Appointments Table */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>Today&apos;s Appointments</h2>
            <button className="btn-secondary btn-sm">View all</button>
          </div>
          <div>
            {APPOINTMENTS.map((a, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '14px 24px',
                borderBottom: i < APPOINTMENTS.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'background 0.15s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{
                  width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                  background: `hsl(${i * 47 + 210}, 70%, 20%)`,
                  border: `1px solid hsl(${i * 47 + 210}, 60%, 35%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, color: `hsl(${i * 47 + 210}, 80%, 75%)`,
                }}>{a.avatar}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{a.client}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{a.service} · {a.staff}</div>
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', flexShrink: 0 }}>{a.time}</div>
                <div style={{
                  padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 600,
                  background: STATUS_STYLES[a.status].bg,
                  color: STATUS_STYLES[a.status].color,
                  flexShrink: 0,
                }}>{STATUS_STYLES[a.status].label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Quick Actions */}
          <div className="card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 14, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {QUICK_ACTIONS.map((action, i) => (
                <button key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 14px', borderRadius: 10,
                  background: 'transparent', border: '1px solid var(--border)',
                  color: 'var(--text-primary)', cursor: 'pointer', fontSize: 13, fontWeight: 500,
                  transition: 'all 0.15s', textAlign: 'left', width: '100%',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'var(--border-bright)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <span style={{ fontSize: 16 }}>{action.icon}</span>
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Occupancy Mini Chart */}
          <div className="card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 16, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Staff Occupancy</h3>
            {[{ name: 'Carlos', pct: 92 }, { name: 'Luis', pct: 78 }, { name: 'Maria', pct: 85 }].map((s, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                  <span style={{ fontWeight: 500 }}>{s.name}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{s.pct}%</span>
                </div>
                <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', borderRadius: 3,
                    width: `${s.pct}%`,
                    background: `linear-gradient(90deg, #6366f1, #06b6d4)`,
                    transition: 'width 1s ease',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
