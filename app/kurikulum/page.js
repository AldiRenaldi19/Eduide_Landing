'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const articles = [
  {
    title: 'Ashabul Kahfi: Menjaga Iman di Tengah Fitnah',
    desc: 'Bagaimana keteguhan iman para pemuda kahfi relevan dengan tantangan menjaga prinsip di media sosial...',
    href: '/kurikulum/kisah-nabi/ashabul-kahfi',
    img: '/asset/img/ashabul-kahfi.jpeg',
    tag: 'Kisah Pemuda',
    tagColor: 'text-teal-600',
  },
  {
    title: 'Nabi Yusuf AS: Integritas dan Tabayyun',
    desc: 'Pelajaran tentang pentingnya melakukan verifikasi (tabayyun) sebelum mempercayai berita hoax dari kisah fitnah...',
    href: '/kurikulum/kisah-nabi/nabi-yusuf',
    img: '/asset/img/nabi-yusuf.png',
    tag: 'Kisah Nabi',
    tagColor: 'text-blue-600',
  },
  {
    title: 'Hakikat Manusia dalam Konteks Agama',
    desc: 'Analisis mendalam mengenai dualitas eksistensi manusia antara aspek biologis, psikologis, dan spiritual...',
    href: '/kurikulum/artikel/hakikat-manusia',
    img: '/asset/img/hakikat.jpg',
    tag: 'Artikel Ilmiah',
    tagColor: 'text-rose-600',
  },
]

export default function KurikulumPage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  return (
    <>
      <Navbar backHref="/" backLabel="Kembali ke Beranda" />

      <header className="bg-slate-900 py-12 md:py-16 px-6 text-center">
        <div data-aos="fade-up">
          <span className="text-teal-400 font-bold tracking-widest uppercase text-xs">
            Modul Literasi Digital & Agama
          </span>
          <h1 className="text-2xl md:text-5xl font-extrabold text-white mt-4">
            Kisah-Kisah dalam <span className="text-teal-400">Al-Qur'an</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Mengambil ibrah (pelajaran) dari sejarah masa lalu untuk menjadi
            pedoman bijak dalam berinteraksi di dunia digital masa kini.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 md:py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <article
              key={art.title}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden card-hover"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              style={{ transition: 'transform 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div className="h-48 bg-slate-200 overflow-hidden">
                {art.img ? (
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-6">
                <span className={`text-xs font-bold uppercase ${art.tagColor}`}>
                  {art.tag}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-slate-800">
                  {art.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {art.desc}
                </p>
                <Link
                  href={art.href}
                  className={`inline-block bg-slate-50 font-bold text-xs px-4 py-2 rounded-lg hover:text-white transition ${art.tagColor.replace('text', 'hover:bg')} hover:text-white`}
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </article>
          ))}

          {/* NEW: Poster Adab Berpakaian card */}
          <article
            className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden card-hover md:col-span-2 lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ transition: 'transform 0.3s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div className="h-48 bg-slate-200 overflow-hidden">
              <img
                src="/asset/img/thumbnail_adab.png"
                alt="Poster Adab Berpakaian"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-emerald-600 uppercase">
                Poster Interaktif
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3 text-slate-800">
                Adab Berpakaian: Pakaian Takwa
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Tampilan interaktif dari ayat-ayat Al-Qur&apos;an tentang adab berpakaian
                — QS. Al-A&apos;raf: 26 & 31.
              </p>
              <Link
                href="/poster/adab-berpakaian"
                className="inline-block bg-emerald-50 text-emerald-600 font-bold text-xs px-4 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition"
              >
                Lihat Poster →
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer simple />
    </>
  )
}
