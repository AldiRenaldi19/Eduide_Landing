'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar({ backHref, backLabel }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navLinks = (
    <>
      <a href="/#home" className="hover:text-teal-600 transition py-2" onClick={closeMenu}>
        Beranda
      </a>
      <a href="/#kurikulum" className="hover:text-teal-600 transition py-2" onClick={closeMenu}>
        Kurikulum
      </a>
      <a href="/#tentang" className="hover:text-teal-600 transition py-2" onClick={closeMenu}>
        Tentang
      </a>
    </>
  )

  return (
    <>
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
            <>
              <div className="hidden md:flex gap-8 font-medium text-slate-600">
                {navLinks}
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 -mr-2 rounded-lg hover:bg-slate-100 transition"
                aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </>
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

      {!backHref && (
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />
          <div
            className={`absolute top-0 right-0 w-64 h-full bg-white shadow-2xl transition-transform duration-300 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col gap-2 p-6 pt-24 text-lg font-medium text-slate-700">
              {navLinks}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
