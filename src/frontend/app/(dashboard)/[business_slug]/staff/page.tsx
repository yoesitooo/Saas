'use client'
import React, { useState } from 'react'

export default function StaffSetup() {
  const [staff, setStaff] = useState([
    { name: 'Dr. Alex Rivera', email: 'alex@example.com', calendar: true },
    { name: 'Elena Vance', email: 'elena@example.com', calendar: false }
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Team Members</h2>
        <button className="btn-primary">+ Invite Staff</button>
      </div>

      <div className="card-premium p-0 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Name</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Email</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Google Calendar</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {staff.map((member, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
                      {member.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-sm">{member.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{member.email}</td>
                <td className="px-6 py-4">
                  {member.calendar ? (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-[10px] font-bold">CONNECTED</span>
                  ) : (
                    <button className="text-[10px] font-bold text-blue-600 hover:underline">CONNECT CALENDAR</button>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-red-500">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
