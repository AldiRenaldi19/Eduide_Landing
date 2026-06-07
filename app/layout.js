import './globals.css'

export const metadata = {
  title: 'Eduide | Literasi Digital & Agama',
  description:
    'Menghubungkan nilai-nilai spiritualitas dengan tantangan teknologi masa kini.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  )
}
