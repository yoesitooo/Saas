import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Horum | White-Label Booking Platform',
  description: 'The most powerful white-label appointment scheduling SaaS for clinics, barbershops, spas, and any service business.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, background: '#09090f' }}>
        {children}
      </body>
    </html>
  )
}
