'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HakikatManusiaPage() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <>
      <Navbar backHref="/kurikulum" backLabel="Kembali ke List" />

      <article className="max-w-4xl mx-auto py-12 md:py-16 px-6" data-aos="fade-up">
        <header className="mb-12">
          <span className="text-rose-600 font-bold tracking-widest uppercase text-xs">
            Artikel Ilmiah Ringan
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            Dualitas Eksistensi: Hakikat Manusia dalam Konteks Islam
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
              AR
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">Aldi Renaldi</p>
              <p className="text-xs text-slate-500">
                Universitas Pelita Bangsa | Pendidikan Agama Islam
              </p>
            </div>
          </div>
        </header>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-lg">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">I. Pendahuluan</h2>
            <p>
              Manusia merupakan makhluk paling paradoksal dalam sejarah
              penciptaan. Dalam konteks Islam, hakikat manusia tidak hanya
              dipandang secara biologis sebagai <i>Homo Sapiens</i>, melainkan
              sebagai entitas spiritual yang memikul tanggung jawab besar.
              Al-Qur&apos;an menyebutkan tiga istilah kunci: <i>Basyar</i> (biologis),
              <i>Insan</i> (psikologis), dan <i>An-Nas</i> (sosial).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              II. Hakikat Keberadaan: Tanah dan Ruh
            </h2>
            <p>
              Dualitas ini membuat manusia memiliki kecenderungan ganda: keinginan
              material yang bersifat bumi (insting) dan kerinduan spiritual yang
              bersifat langit (etika). Sebagai <strong>Khalifah fil Ardh</strong>,
              hakikat manusia adalah mengelola alam dengan hikmah.
            </p>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-rose-600 mb-6">
              III. Studi Kasus: Penyimpangan Hakikat Manusia
            </h2>

            <div className="space-y-6">
              <p className="text-sm text-slate-600">
                Berikut adalah bukti perilaku manusia di ruang sosial yang tidak
                sesuai dengan hakikat <i>Insan</i> (makhluk berakal dan beretika):
              </p>

              <div className="overflow-hidden rounded-2xl border-4 border-slate-100 shadow-inner bg-slate-50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto min-h-[200px] object-cover"
                >
                  <source src="/asset/vid/taxi-greensm.mp4" type="video/mp4" />
                  Browser Anda tidak mendukung tag video.
                </video>
                <p className="text-center py-3 text-xs italic text-slate-400 font-medium">
                  Video 1. contoh perilaku manusia yang menunjukan penyimpangan
                  terhadap peraturan dan merugikan orang lain karena
                  ketidaksabaran atas kurangnya pengendalian diri.
                </p>
              </div>

              <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-500">
                <h4 className="font-bold text-rose-900 mb-2">Opini Pribadi:</h4>
                <p className="text-rose-800 text-base italic leading-relaxed">
                  &quot;Menurut analisis saya, fenomena di atas menunjukkan bahwa
                  ketika manusia kehilangan kesadaran akan dimensi spiritualnya
                  (ruh), ia cenderung kembali ke sifat dasar tanah yang rendah.
                  Perilaku tersebut merusak hakikat manusia sebagai makhluk sosial
                  (An-Nas) karena lebih mengutamakan nafsu sesaat daripada akal
                  sehat. Di era digital, integrasi antara iman dan teknologi
                  menjadi kunci agar kita tidak kehilangan jati diri sebagai
                  manusia dan tetap menjaga keseimbangan antara kebutuhan material
                  dan spiritual. dari perilaku diatas karena ketidaksabaran dan
                  kurangnya pengendalian diri.&quot;
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">IV. Kesimpulan</h2>
            <p>
              Mengenal hakikat diri adalah langkah pertama untuk mengenal Sang
              Pencipta. Kita adalah perpaduan antara keterbatasan fisik dan
              ketidakterbatasan potensi akal serta ruh.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase">
              Referensi:
            </h2>
            <ul className="list-decimal pl-6 text-sm space-y-2 text-slate-500">
              <li>Al-Ghazali, I. (2020). <i>Ihya&apos; Ulumuddin.</i></li>
              <li>Shihab, M. Q. (2002). <i>Wawasan Al-Qur&apos;an.</i> Mizan.</li>
              <li>
                infojakarta.co.id (2026).
                <i>Perilaku Manusia di Ruang Sosial yang Menunjukkan Penyimpangan
                Hakikat Manusia Karena ketidaksabaran dan Kurangnya Pengendalian
                Diri Serta Merugikan Orang Lain.</i>
                Diakses pada 1 Mei 2026, dari Tiktok @infojakarta.co.id
              </li>
            </ul>
          </section>
        </div>
      </article>

      <Footer simple={false} />
    </>
  )
}
