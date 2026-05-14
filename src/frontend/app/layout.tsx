import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Horum | White-Label Booking Platform',
  description: 'Premium appointment scheduling for any service business.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body {
            font-family: 'Inter', system-ui, sans-serif;
            background: #08080f;
            color: #f1f5f9;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
          }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #08080f; }
          ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
          ::selection { background: rgba(99,102,241,0.4); color: white; }
          
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes slideNiche {
            0%, 100% { opacity: 1; transform: translateY(0); }
            40% { opacity: 0; transform: translateY(-12px); }
            60% { opacity: 0; transform: translateY(12px); }
          }
          
          .au { animation: fadeUp 0.6s ease both; }
          .ai { animation: fadeIn 0.5s ease both; }
          .af { animation: float 3s ease-in-out infinite; }
          
          a { text-decoration: none; color: inherit; }
          button { font-family: inherit; }
          input, textarea { font-family: inherit; }
        `}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
