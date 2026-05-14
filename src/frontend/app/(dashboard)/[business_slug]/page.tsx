import React from 'react'

export default function DashboardPage({ params }: { params: { business_slug: string } }) {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="$24,500" change="+12.5%" icon="💰" color="blue" />
        <StatCard title="Appointments" value="156" change="+8.2%" icon="📅" color="purple" />
        <StatCard title="Active Staff" value="12" change="0%" icon="👥" color="green" />
        <StatCard title="Customer Satisfaction" value="98%" change="+2.1%" icon="⭐" color="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Appointments */}
        <div className="lg:col-span-2 card-premium">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Appointments</h2>
            <button className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            <AppointmentRow name="John Doe" service="Haircut & Beard" time="14:30 PM" status="Confirmed" />
            <AppointmentRow name="Sarah Smith" service="Full Eye Exam" time="15:00 PM" status="Pending" />
            <AppointmentRow name="Mike Johnson" service="Consultation" time="16:15 PM" status="Cancelled" />
            <AppointmentRow name="Elena Rodriguez" service="Standard Checkup" time="09:00 AM" status="Confirmed" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="card-premium bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none">
            <h3 className="text-lg font-bold mb-2">New Appointment</h3>
            <p className="text-blue-100 text-sm mb-4">Quickly schedule a client without going through the public flow.</p>
            <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition">
              + Create Manually
            </button>
          </div>

          <div className="card-premium">
            <h3 className="text-lg font-bold mb-4">Branch Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Main Street Office</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg font-medium">Open</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Downtown Branch</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg font-medium">Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, change, icon, color }: { title: string, value: string, change: string, icon: string, color: string }) {
  return (
    <div className="card-premium group">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm bg-${color}-50 text-${color}-600`}>
          {icon}
        </div>
        <span className={`text-sm font-bold ${change.startsWith('+') ? 'text-green-500' : 'text-gray-400'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1 tracking-tight">{value}</p>
    </div>
  )
}

function AppointmentRow({ name, service, time, status }: { name: string, service: string, time: string, status: string }) {
  const statusColors: any = {
    Confirmed: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Cancelled: 'bg-red-100 text-red-700'
  }

  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition border border-transparent hover:border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className="text-xs text-gray-500">{service}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold">{time}</p>
        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md ${statusColors[status]}`}>
          {status}
        </span>
      </div>
    </div>
  )
}
