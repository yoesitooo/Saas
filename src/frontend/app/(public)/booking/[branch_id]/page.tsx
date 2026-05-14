'use client'
import React, { useState } from 'react'
import '../../../globals.css'

export default function BookingPage({ params }: { params: { branch_id: string } }) {
  const [selectedService, setSelectedService] = useState('Standard Consultation')
  const [selectedStaff, setSelectedStaff] = useState('Dr. Alex Rivera')
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const timeSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '14:00 PM', '14:30 PM', '15:00 PM']

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center">
      <nav className="w-full max-w-7xl px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg"></div>
          <span className="font-bold text-xl tracking-tight">Horum Booking</span>
        </div>
        <button className="text-sm font-semibold text-gray-500 hover:text-black">Need help?</button>
      </nav>

      <main className="w-full max-w-4xl px-6 py-12 animate-fade-in">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-gray-900">Book your session.</h1>
          <p className="text-xl text-gray-500">Elegant scheduling for a better lifestyle.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <BookingSection title="Select Service" number={1}>
              <div className="grid grid-cols-1 gap-3">
                <ServiceItem 
                  name="Standard Consultation" 
                  duration="30 min" 
                  price="$45" 
                  active={selectedService === 'Standard Consultation'}
                  onClick={() => setSelectedService('Standard Consultation')}
                />
                <ServiceItem 
                  name="Full Treatment" 
                  duration="60 min" 
                  price="$80" 
                  active={selectedService === 'Full Treatment'}
                  onClick={() => setSelectedService('Full Treatment')}
                />
              </div>
            </BookingSection>

            <BookingSection title="Choose Professional" number={2}>
              <div className="flex gap-4 overflow-x-auto pb-2">
                <StaffItem 
                  name="Dr. Alex Rivera" 
                  specialty="Senior Specialist" 
                  active={selectedStaff === 'Dr. Alex Rivera'}
                  onClick={() => setSelectedStaff('Dr. Alex Rivera')}
                />
                <StaffItem 
                  name="Elena Vance" 
                  specialty="Junior Associate" 
                  active={selectedStaff === 'Elena Vance'}
                  onClick={() => setSelectedStaff('Elena Vance')}
                />
              </div>
            </BookingSection>

            <BookingSection title="Select Time" number={3}>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {timeSlots.map(time => (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 text-sm font-bold rounded-xl border-2 transition-all ${
                      selectedTime === time 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white border-gray-100 hover:border-black'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </BookingSection>
          </div>

          <div className="space-y-6">
            <div className="card-premium sticky top-6 shadow-2xl shadow-gray-200 border-gray-100">
              <h3 className="font-bold text-lg mb-6">Booking Summary</h3>
              <div className="space-y-4 mb-8">
                <SummaryRow label="Service" value={selectedService} />
                <SummaryRow label="Staff" value={selectedStaff} />
                {selectedTime && <SummaryRow label="Time" value={selectedTime} />}
                <div className="border-t border-dashed pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{selectedService === 'Standard Consultation' ? '$45.00' : '$80.00'}</span>
                </div>
              </div>
              <button 
                disabled={!selectedTime}
                className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-blue-200"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function BookingSection({ title, number, children }: { title: string, number: number, children: React.ReactNode }) {
  return (
    <div className="card-premium p-8 bg-white border-gray-100/50">
      <div className="flex items-center gap-4 mb-6">
        <span className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-lg">
          {number}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function ServiceItem({ name, duration, price, active, onClick }: { name: string, duration: string, price: string, active: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex justify-between items-center ${
        active ? 'border-blue-600 bg-blue-50/30' : 'border-gray-50 hover:border-gray-200'
      }`}
    >
      <div>
        <p className={`font-bold ${active ? 'text-blue-700' : 'text-gray-900'}`}>{name}</p>
        <p className="text-sm text-gray-500">{duration}</p>
      </div>
      <span className="font-bold text-xl">{price}</span>
    </div>
  )
}

function StaffItem({ name, specialty, active, onClick }: { name: string, specialty: string, active: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`min-w-[150px] p-5 rounded-2xl border-2 transition-all text-center cursor-pointer ${
        active ? 'border-blue-600 bg-blue-50/30' : 'border-gray-50 hover:border-gray-200'
      }`}
    >
      <div className={`w-16 h-16 rounded-full mx-auto mb-3 border-2 overflow-hidden shadow-sm ${active ? 'border-blue-400' : 'border-white'}`}>
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
      </div>
      <p className={`font-bold text-sm ${active ? 'text-blue-700' : 'text-gray-900'}`}>{name}</p>
      <p className="text-[11px] text-gray-400 mt-1 uppercase font-semibold">{specialty}</p>
    </div>
  )
}

function SummaryRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-400 font-medium">{label}</span>
      <span className="font-bold text-gray-900 text-right">{value}</span>
    </div>
  )
}
