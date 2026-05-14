'use client'
import React, { useState } from 'react'

export default function BranchSetup() {
  const [branches, setBranches] = useState([
    { name: 'Main Street Office', address: '123 Main St' },
    { name: 'Downtown Branch', address: '456 Center Ave' }
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Branches</h2>
        <button className="btn-primary">+ Add New Branch</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {branches.map((branch, i) => (
          <div key={i} className="card-premium flex justify-between items-center">
            <div>
              <p className="font-bold text-lg">{branch.name}</p>
              <p className="text-sm text-gray-500">{branch.address}</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">⚙️</button>
          </div>
        ))}
      </div>
      
      <div className="card-premium border-dashed border-2 bg-gray-50 flex flex-col items-center py-10">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl mb-3">📍</div>
        <p className="text-gray-500 font-medium">Add more branches to expand your business</p>
      </div>
    </div>
  )
}
