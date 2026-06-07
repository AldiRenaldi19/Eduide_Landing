'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar({ backHref, backLabel }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 glass border-b border-slate-200 px-6 md:px-12 flex justify-between items-center ${
        scrolled ? 'py-3 shadow-lg' : 'py-4'
      }`}
    >
      <Link
        href="/"
        className="text-xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent italic"
      >
        Eduide.
      </Link>

      <div className="flex items-center gap-6">
        {!backHref && (
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <a href="/#home" className="hover:text-teal-600 transition">
              Beranda
            </a>
            <a href="/#kurikulum" className="hover:text-teal-600 transition">
              Kurikulum
            </a>
            <a href="/#tentang" className="hover:text-teal-600 transition">
              Tentang
            </a>
          </div>
        )}
        {backHref && (
          <Link
            href={backHref}
            className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition"
          >
            ← {backLabel || 'Kembali'}
          </Link>
        )}
      </div>
    </nav>
  )
}
