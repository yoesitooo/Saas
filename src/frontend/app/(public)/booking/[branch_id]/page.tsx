'use client'
import React, { useState } from 'react'

const S = {
  bg: '#08080f',
  bgCard: '#0f0f1c',
  border: 'rgba(255,255,255,0.07)',
  borderBright: 'rgba(255,255,255,0.14)',
  primary: '#6366f1',
  primaryGlow: 'rgba(99,102,241,0.35)',
  textPrimary: '#f1f5f9',
  textSecondary: '#94a3b8',
  textMuted: '#475569',
}

const STEPS = ['Service', 'Professional', 'Date & Time', 'Your Info']

const SERVICES = [
  { id: 1, name: 'Classic Haircut', duration: '30 min', price: '$25', icon: '✂️' },
  { id: 2, name: 'Beard Trim', duration: '20 min', price: '$18', icon: '🪒' },
  { id: 3, name: 'Color & Style', duration: '90 min', price: '$75', icon: '🎨' },
  { id: 4, name: 'Full Package', duration: '60 min', price: '$55', icon: '⭐' },
]

const STAFF = [
  { id: 1, name: 'Carlos Mendez', role: 'Master Barber', rating: 4.9, slots: 8, hue: 250 },
  { id: 2, name: 'Luis Pereira', role: 'Senior Stylist', rating: 4.8, slots: 5, hue: 190 },
  { id: 3, name: 'Maria Santos', role: 'Color Expert', rating: 4.9, slots: 3, hue: 300 },
]

const TIMES = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30']

function getDays() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() + i + 1)
    return { num: d.getDate(), day: d.toLocaleDateString('en-US', { weekday: 'short' }), full: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }
  })
}

export default function BookingPage() {
  const [step, setStep] = useState(0)
  const [sel, setSel] = useState<{ service?: typeof SERVICES[0], staff?: typeof STAFF[0], day?: ReturnType<typeof getDays>[0], time?: string }>({})
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [done, setDone] = useState(false)
  const days = getDays()

  const canNext = () => {
    if (step === 0) return !!sel.service
    if (step === 1) return !!sel.staff
    if (step === 2) return !!(sel.day && sel.time)
    if (step === 3) return !!(form.name && form.email)
    return false
  }

  if (done) return (
    <div style={{ minHeight: '100vh', background: S.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", padding: 24 }}>
      <div style={{ textAlign: 'center', maxWidth: 440, animation: 'fadeUp 0.6s ease both' }}>
        <div style={{ fontSize: 80, marginBottom: 24 }}>🎉</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-1px', marginBottom: 10 }}>You&apos;re booked!</h1>
        <p style={{ color: S.textSecondary, fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
          A confirmation has been sent to <strong style={{ color: S.textPrimary }}>{form.email}</strong>.<br />We&apos;ll remind you 24h before.
        </p>
        <div style={{ background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 14, padding: 22, marginBottom: 28, textAlign: 'left' }}>
          {[['Service', sel.service?.name], ['Professional', sel.staff?.name], ['Date', sel.day?.full], ['Time', sel.time]].map(([k, v]) => (
            <div key={k as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: `1px solid ${S.border}`, fontSize: 14 }}>
              <span style={{ color: S.textMuted }}>{k}</span>
              <span style={{ fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
        <button onClick={() => { setDone(false); setStep(0); setSel({}); setForm({ name: '', email: '', phone: '' }); }}
          style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', color: 'white', border: 'none', padding: '13px 28px', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
          Book Another →
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: S.bg, fontFamily: "'Inter', sans-serif", padding: '32px 20px 60px', color: S.textPrimary }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg,#6366f1,#06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 900, color: 'white' }}>H</div>
          <span style={{ fontWeight: 800, fontSize: 16 }}>horum</span>
        </div>
        <h1 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 6 }}>Book an Appointment</h1>
        <p style={{ color: S.textSecondary, fontSize: 14 }}>Select your service and secure your time slot in seconds.</p>
      </div>

      {/* Progress */}
      <div style={{ maxWidth: 560, margin: '0 auto 40px', display: 'flex', alignItems: 'center' }}>
        {STEPS.map((label, i) => (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700,
                background: i < step ? '#6366f1' : i === step ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : 'rgba(255,255,255,0.06)',
                color: i <= step ? 'white' : S.textMuted,
                boxShadow: i === step ? `0 0 16px ${S.primaryGlow}` : 'none',
                border: i <= step ? 'none' : `1px solid ${S.border}`,
                transition: 'all 0.3s',
              }}>{i < step ? '✓' : i + 1}</div>
              <span style={{ fontSize: 11, fontWeight: 600, color: i <= step ? S.textPrimary : S.textMuted, whiteSpace: 'nowrap' }}>{label}</span>
            </div>
            {i < STEPS.length - 1 && <div style={{ flex: 1, height: 1, background: i < step ? '#6366f1' : S.border, margin: '0 6px', marginBottom: 20, transition: 'background 0.3s' }} />}
          </React.Fragment>
        ))}
      </div>

      {/* Content + Sidebar */}
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20, alignItems: 'start' }}>
        <div style={{ animation: 'fadeIn 0.3s ease both' }}>
          {/* Step 0 — Services */}
          {step === 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              {SERVICES.map(s => (
                <div key={s.id} onClick={() => setSel(p => ({ ...p, service: s }))} style={{
                  background: sel.service?.id === s.id ? 'rgba(99,102,241,0.1)' : S.bgCard,
                  border: `1px solid ${sel.service?.id === s.id ? '#6366f1' : S.border}`,
                  boxShadow: sel.service?.id === s.id ? '0 0 0 1px #6366f1' : 'none',
                  borderRadius: 16, padding: 24, cursor: 'pointer', transition: 'all 0.2s',
                }}>
                  <div style={{ fontSize: 38, marginBottom: 12 }}>{s.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{s.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: S.textSecondary }}>
                    <span>⏱ {s.duration}</span>
                    <span style={{ fontWeight: 700, color: '#a5b4fc' }}>{s.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 1 — Staff */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {STAFF.map(s => (
                <div key={s.id} onClick={() => setSel(p => ({ ...p, staff: s }))} style={{
                  display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px',
                  background: sel.staff?.id === s.id ? 'rgba(99,102,241,0.1)' : S.bgCard,
                  border: `1px solid ${sel.staff?.id === s.id ? '#6366f1' : S.border}`,
                  boxShadow: sel.staff?.id === s.id ? '0 0 0 1px #6366f1' : 'none',
                  borderRadius: 14, cursor: 'pointer', transition: 'all 0.2s',
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: `linear-gradient(135deg, hsl(${s.hue},60%,30%), hsl(${s.hue},70%,22%))`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 15, fontWeight: 800, color: `hsl(${s.hue},80%,75%)`,
                  }}>{s.name.split(' ').map(w => w[0]).join('')}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{s.name}</div>
                    <div style={{ fontSize: 13, color: S.textMuted }}>{s.role}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#fcd34d', fontWeight: 700, fontSize: 14 }}>★ {s.rating}</div>
                    <div style={{ color: S.textMuted, fontSize: 12 }}>{s.slots} slots today</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 2 — Date & Time */}
          {step === 2 && (
            <div>
              <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
                {days.map((d, i) => (
                  <div key={i} onClick={() => setSel(p => ({ ...p, day: d }))} style={{
                    flex: 1, padding: '14px 6px', textAlign: 'center', cursor: 'pointer', borderRadius: 12,
                    background: sel.day?.num === d.num ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : S.bgCard,
                    border: `1px solid ${sel.day?.num === d.num ? 'transparent' : S.border}`,
                    transition: 'all 0.2s',
                  }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: sel.day?.num === d.num ? 'rgba(255,255,255,0.7)' : S.textMuted, marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{d.day}</div>
                    <div style={{ fontSize: 20, fontWeight: 900, color: sel.day?.num === d.num ? 'white' : S.textPrimary }}>{d.num}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
                {TIMES.map(t => (
                  <button key={t} onClick={() => setSel(p => ({ ...p, time: t }))} style={{
                    padding: '12px 8px', borderRadius: 10, fontSize: 13, fontWeight: 600,
                    background: sel.time === t ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : S.bgCard,
                    border: `1px solid ${sel.time === t ? 'transparent' : S.border}`,
                    color: sel.time === t ? 'white' : S.textPrimary,
                    cursor: 'pointer', transition: 'all 0.15s',
                  }}>{t}</button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 — Contact */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { ph: 'Full name *', key: 'name', type: 'text' },
                { ph: 'Email address *', key: 'email', type: 'email' },
                { ph: 'Phone (optional)', key: 'phone', type: 'tel' },
              ].map(f => (
                <input key={f.key} type={f.type} placeholder={f.ph}
                  value={form[f.key as keyof typeof form]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  style={{
                    width: '100%', background: S.bgCard, border: `1px solid ${S.border}`,
                    borderRadius: 10, padding: '13px 16px', color: S.textPrimary, fontSize: 14, outline: 'none',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.2)'; }}
                  onBlur={e => { e.target.style.borderColor = S.border; e.target.style.boxShadow = 'none'; }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Booking Summary */}
        <div style={{ position: 'sticky', top: 24 }}>
          <div style={{ background: S.bgCard, border: `1px solid ${S.border}`, borderRadius: 16, padding: 22 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: S.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Your Booking</div>
            {[
              { label: 'Service', v: sel.service?.name, sub: sel.service ? `${sel.service.duration} · ${sel.service.price}` : undefined },
              { label: 'With', v: sel.staff?.name, sub: sel.staff?.role },
              { label: 'Date', v: sel.day?.full },
              { label: 'Time', v: sel.time },
            ].map(({ label, v, sub }) => (
              <div key={label} style={{ paddingBottom: 12, marginBottom: 12, borderBottom: `1px solid ${S.border}` }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: S.textMuted, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{label}</div>
                {v ? <>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{v}</div>
                  {sub && <div style={{ fontSize: 12, color: S.textMuted, marginTop: 2 }}>{sub}</div>}
                </> : <div style={{ fontSize: 13, color: S.textMuted, fontStyle: 'italic' }}>—</div>}
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
              {step > 0 && (
                <button onClick={() => setStep(s => s - 1)} style={{
                  width: '100%', padding: '11px', borderRadius: 9,
                  background: 'transparent', border: `1px solid ${S.border}`,
                  color: S.textSecondary, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                }}>← Back</button>
              )}
              <button
                disabled={!canNext()}
                onClick={() => canNext() && (step < 3 ? setStep(s => s + 1) : setDone(true))}
                style={{
                  width: '100%', padding: '12px', borderRadius: 9, border: 'none',
                  background: canNext() ? 'linear-gradient(135deg,#6366f1,#06b6d4)' : 'rgba(255,255,255,0.06)',
                  color: canNext() ? 'white' : S.textMuted,
                  fontSize: 14, fontWeight: 700, cursor: canNext() ? 'pointer' : 'not-allowed',
                  boxShadow: canNext() ? '0 4px 20px rgba(99,102,241,0.35)' : 'none',
                  transition: 'all 0.2s',
                }}>
                {step === 3 ? '✓ Confirm Booking' : 'Continue →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
