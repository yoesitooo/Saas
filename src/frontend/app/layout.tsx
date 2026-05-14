import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Horum Booking | Premium Scheduling',
  description: 'Niche-agnostic appointment scheduling for elite businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
