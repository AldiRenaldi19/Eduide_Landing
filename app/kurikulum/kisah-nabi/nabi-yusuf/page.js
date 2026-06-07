'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NabiYusufPage() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <>
      <Navbar backHref="/kurikulum" backLabel="Kembali ke List" />

      <article className="max-w-4xl mx-auto py-12 md:py-16 px-6" data-aos="fade-up">
        <header className="mb-12">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
            Kisah Nabi
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            Nabi Yusuf AS: Integritas dan Tabayyun
          </h1>
          <img
            src="/asset/img/nabi-yusuf.png"
            className="w-full h-[250px] md:h-[400px] object-cover rounded-3xl shadow-lg"
            alt="Nabi Yusuf"
          />
        </header>

        <div className="max-w-none space-y-6 text-slate-700 text-lg">
          <p className="font-semibold text-xl text-slate-800">Kisah Penuh Ujian</p>
          <p>
            Nabi Yusuf AS melewati berbagai fase sulit: dibuang ke sumur oleh
            saudara-saudaranya, dijadikan budak, hingga difitnah oleh istri
            al-Aziz. Namun, beliau tetap menjaga integritas moral dan tidak
            membalas keburukan dengan dendam.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl italic text-blue-900">
            &quot;Wahai Tuhanku, penjara lebih aku sukai daripada memenuhi ajakan
            mereka...&quot; (QS. Yusuf: 33)
          </div>

          <p className="font-semibold text-xl text-slate-800 mt-8 text-blue-600">
            Relevansi di Era Digital
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Melawan Hoax (Tabayyun):</strong> Kisah fitnah terhadap Nabi
              Yusuf mengajarkan kita pentingnya memverifikasi informasi sebelum
              menyebarkannya.
            </li>
            <li>
              <strong>Menjaga Kehormatan:</strong> Di dunia maya yang penuh godaan
              konten negatif, integritas Nabi Yusuf dalam menjaga pandangan dan
              kehormatan adalah teladan utama.
            </li>
            <li>
              <strong>Pemaafan di Ruang Publik:</strong> Beliau memaafkan
              saudara-saudaranya yang pernah mencelakainya, mengajarkan kita untuk
              tidak menggunakan &quot;Cancel Culture&quot; secara membabi buta.
            </li>
          </ul>
        </div>
      </article>

      <Footer simple={false} />
    </>
  )
}
