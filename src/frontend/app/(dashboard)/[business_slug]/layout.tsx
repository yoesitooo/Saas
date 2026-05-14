import React from 'react'
import '../globals.css'

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { business_slug: string }
}) {
  return (
    <div className="flex min-h-screen bg-[#f8f9fa]">
      {/* Sidebar */}
      <aside className="w-72 glass fixed inset-y-0 left-0 z-50 flex flex-col p-6 m-4 rounded-[2rem] shadow-xl">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            {params.business_slug.charAt(0).toUpperCase()}
          </div>
          <span className="font-bold text-xl tracking-tight capitalize">
            {params.business_slug.replace('-', ' ')}
          </span>
        </div>
        
        <nav className="flex-1 space-y-2">
          <NavItem href={`/${params.business_slug}`} icon="📊" label="Overview" active />
          <NavItem href={`/${params.business_slug}/branches`} icon="🏢" label="Branches" />
          <NavItem href={`/${params.business_slug}/staff`} icon="👥" label="Staff" />
          <NavItem href="#" icon="🛠️" label="Services" />
          <NavItem href="#" icon="📅" label="Appointments" />
        </nav>

        <div className="mt-auto p-4 bg-blue-50 rounded-2xl">
          <p className="text-xs font-semibold text-blue-600 mb-1">PRO PLAN</p>
          <p className="text-sm text-blue-900 font-medium">Manage up to 5 branches</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-80 p-10 animate-fade-in">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Monitor your business performance in real-time.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white border rounded-full shadow-sm hover:bg-gray-50 transition">
              🔔
            </button>
            <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" />
            </div>
          </div>
        </header>
        
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  )
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: string, label: string, active?: boolean }) {
  return (
    <a href={href} className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
      active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-white hover:text-gray-900'
    }`}>
      <span className="text-lg">{icon}</span>
      <span className="font-semibold">{label}</span>
    </a>
  )
}
