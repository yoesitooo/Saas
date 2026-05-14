import React from 'react'
import './globals.css'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl shadow-lg shadow-blue-200"></div>
          <span className="font-bold text-2xl tracking-tighter">Horum</span>
        </div>
        <div className="flex gap-8 items-center">
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-black">Features</a>
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-black">Pricing</a>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center space-y-8 animate-fade-in">
          <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase">
            Niche-Agnostic Booking SaaS
          </span>
          <h1 className="text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            One platform. <br />
            <span className="text-blue-600">Any business.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
            From optical clinics to barbershops, Horum provides a premium, white-label booking experience that integrates seamlessly with your brand.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="btn-primary py-5 px-10 text-lg shadow-2xl shadow-blue-200">Start Free Trial</button>
            <button className="px-10 py-5 border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition">View Demo</button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard 
            title="White-Label Experience" 
            desc="Embed our premium booking widget into your existing website with just two lines of code." 
            icon="🏷️" 
          />
          <FeatureCard 
            title="Google Calendar Sync" 
            desc="Keep your team synchronized. Appointments are automatically added to your professionals' calendars." 
            icon="📅" 
          />
          <FeatureCard 
            title="Smart Notifications" 
            desc="Reduce no-shows with automated email and SMS reminders for every client." 
            icon="🔔" 
          />
        </div>

        {/* Use Cases */}
        <div className="mt-40 bg-gray-50 rounded-[3rem] p-16 text-center">
          <h2 className="text-4xl font-bold mb-12">Built for every industry.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Optical Clinics', 'Barbershops', 'Law Firms', 'Dental Offices', 'Personal Trainers', 'Pet Grooming'].map(niche => (
              <span key={niche} className="px-8 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 font-bold text-gray-700">
                {niche}
              </span>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t py-20 text-center text-gray-400 text-sm">
        &copy; 2024 Horum Technologies. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ title, desc, icon }: { title: string, desc: string, icon: string }) {
  return (
    <div className="space-y-4">
      <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  )
}
