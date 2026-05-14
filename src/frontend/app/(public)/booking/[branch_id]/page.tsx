'use client'
import React, { useState } from 'react'

const STEPS = ['Service', 'Professional', 'Date & Time', 'Confirm']

const SERVICES = [
  { id: 1, name: 'Classic Haircut', duration: '30 min', price: '$25', icon: '✂️' },
  { id: 2, name: 'Beard Trim & Shape', duration: '20 min', price: '$18', icon: '🪒' },
  { id: 3, name: 'Color & Style', duration: '90 min', price: '$75', icon: '🎨' },
  { id: 4, name: 'Full Package', duration: '60 min', price: '$55', icon: '⭐' },
]

const STAFF = [
  { id: 1, name: 'Carlos Mendez', role: 'Master Barber', rating: 4.9, avatar: 'CM', slots: 8 },
  { id: 2, name: 'Luis Pereira', role: 'Senior Stylist', rating: 4.8, avatar: 'LP', slots: 5 },
  { id: 3, name: 'Maria Santos', role: 'Color Expert', rating: 4.9, avatar: 'MS', slots: 3 },
]

const TIMES = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30']

const DAYS = Array.from({ length: 7 }, (_, i) => {
  const d = new Date()
  d.setDate(d.getDate() + i)
  return {
    date: d.getDate(),
    day: d.toLocaleDateString('en-US', { weekday: 'short' }),
    full: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    disabled: i === 0,
  }
})

export default function BookingPage({ params }: { params: { branch_id: string } }) {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<{ service?: typeof SERVICES[0], staff?: typeof STAFF[0], day?: typeof DAYS[0], time?: string }>({})
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const canNext = () => {
    if (step === 0) return !!selected.service
    if (step === 1) return !!selected.staff
    if (step === 2) return !!selected.day && !!selected.time
    if (step === 3) return form.name && form.email
    return false
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-sans)', padding: 24,
      }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }} className="animate-fade-up">
          <div style={{ fontSize: 72, marginBottom: 24 }}>🎉</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>You&apos;re booked!</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 32, fontSize: 16 }}>
            A confirmation email has been sent to <strong style={{ color: 'var(--text-primary)' }}>{form.email}</strong>.<br/>
            We&apos;ll send a reminder 24 hours before your appointment.
          </p>
          <div className="card" style={{ padding: 24, marginBottom: 28, textAlign: 'left' }}>
            {[
              ['Service', selected.service?.name],
              ['Professional', selected.staff?.name],
              ['Date', selected.day?.full],
              ['Time', selected.time],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 14 }}>
                <span style={{ color: 'var(--text-muted)' }}>{k}</span>
                <span style={{ fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
          <button className="btn-primary" onClick={() => { setSubmitted(false); setStep(0); setSelected({}); setForm({ name: '', email: '', phone: '' }) }}>
            Book Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', fontFamily: 'var(--font-sans)', padding: '32px 16px' }}>
      {/* Header */}
      <div style={{ maxWidth: 900, margin: '0 auto 32px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg,#6366f1,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900, color: 'white' }}>H</div>
          <span style={{ fontWeight: 800, fontSize: 16 }}>horum</span>
        </div>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 8 }}>Book an Appointment</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Complete the steps below to secure your slot.</p>
      </div>

      {/* Steps Indicator */}
      <div style={{ maxWidth: 600, margin: '0 auto 40px', display: 'flex', alignItems: 'center' }}>
        {STEPS.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', fontSize: 13, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: i < step ? '#6366f1' : i === step ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : 'var(--bg-card)',
                border: i <= step ? 'none' : '1px solid var(--border)',
                color: i <= step ? 'white' : 'var(--text-muted)',
                transition: 'all 0.3s',
                boxShadow: i === step ? '0 0 20px rgba(99,102,241,0.4)' : 'none',
              }}>{i < step ? '✓' : i + 1}</div>
              <span style={{ fontSize: 11, fontWeight: 600, color: i <= step ? 'var(--text-primary)' : 'var(--text-muted)' }}>{s}</span>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ flex: 1, height: 1, background: i < step ? '#6366f1' : 'var(--border)', margin: '0 8px', marginBottom: 22, transition: 'background 0.3s' }} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24, alignItems: 'start' }}>
        <div className="animate-fade-up">
          
          {/* Step 0: Service */}
          {step === 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              {SERVICES.map(s => (
                <div key={s.id} onClick={() => setSelected(p => ({ ...p, service: s }))} className="card" style={{
                  padding: 24, cursor: 'pointer',
                  borderColor: selected.service?.id === s.id ? '#6366f1' : 'var(--border)',
                  background: selected.service?.id === s.id ? 'rgba(99,102,241,0.08)' : 'var(--bg-card)',
                  boxShadow: selected.service?.id === s.id ? '0 0 0 1px #6366f1' : 'none',
                }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{s.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                    <span style={{ color: 'var(--text-muted)' }}>⏱ {s.duration}</span>
                    <span style={{ fontWeight: 700, color: '#a5b4fc' }}>{s.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Staff */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {STAFF.map(s => (
                <div key={s.id} onClick={() => setSelected(p => ({ ...p, staff: s }))} className="card" style={{
                  padding: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16,
                  borderColor: selected.staff?.id === s.id ? '#6366f1' : 'var(--border)',
                  background: selected.staff?.id === s.id ? 'rgba(99,102,241,0.08)' : 'var(--bg-card)',
                  boxShadow: selected.staff?.id === s.id ? '0 0 0 1px #6366f1' : 'none',
                }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'linear-gradient(135deg,#6366f1,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: 'white', flexShrink: 0 }}>{s.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{s.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{s.role}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#fcd34d' }}>★ {s.rating}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.slots} slots left</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div>
              <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
                {DAYS.map((d, i) => (
                  <div key={i} onClick={() => !d.disabled && setSelected(p => ({ ...p, day: d }))} style={{
                    flex: 1, padding: '14px 8px', borderRadius: 12, textAlign: 'center', cursor: d.disabled ? 'not-allowed' : 'pointer',
                    background: selected.day?.date === d.date ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : d.disabled ? 'rgba(255,255,255,0.02)' : 'var(--bg-card)',
                    border: selected.day?.date === d.date ? 'none' : '1px solid var(--border)',
                    opacity: d.disabled ? 0.35 : 1,
                    transition: 'all 0.2s',
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: selected.day?.date === d.date ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', marginBottom: 4 }}>{d.day}</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: selected.day?.date === d.date ? 'white' : 'var(--text-primary)' }}>{d.date}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {TIMES.map(t => (
                  <button key={t} onClick={() => setSelected(p => ({ ...p, time: t }))} style={{
                    padding: '12px 8px', borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    background: selected.time === t ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : 'var(--bg-card)',
                    border: selected.time === t ? 'none' : '1px solid var(--border)',
                    color: selected.time === t ? 'white' : 'var(--text-primary)',
                    transition: 'all 0.15s',
                  }}>{t}</button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input className="input" placeholder="Your full name *" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
              <input className="input" placeholder="Email address *" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
              <input className="input" placeholder="Phone number (optional)" type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
            </div>
          )}
        </div>

        {/* Summary Sidebar */}
        <div style={{ position: 'sticky', top: 24 }}>
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: 18 }}>Your Booking</h3>
            {[
              { label: 'Service', value: selected.service?.name, sub: selected.service ? `${selected.service.duration} · ${selected.service.price}` : undefined },
              { label: 'With', value: selected.staff?.name, sub: selected.staff?.role },
              { label: 'Date', value: selected.day?.full },
              { label: 'Time', value: selected.time },
            ].map(({ label, value, sub }) => (
              <div key={label} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                {value ? (
                  <>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{value}</div>
                    {sub && <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{sub}</div>}
                  </>
                ) : (
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', fontStyle: 'italic' }}>Not selected</div>
                )}
              </div>
            ))}
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              {step > 0 && (
                <button className="btn-secondary" style={{ flex: 1 }} onClick={() => setStep(s => s - 1)}>Back</button>
              )}
              <button
                className="btn-primary"
                style={{ flex: 2, opacity: canNext() ? 1 : 0.5, cursor: canNext() ? 'pointer' : 'not-allowed' }}
                onClick={() => canNext() && (step < 3 ? setStep(s => s + 1) : handleSubmit())}
              >
                {step === 3 ? '✓ Confirm Booking' : 'Continue →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
