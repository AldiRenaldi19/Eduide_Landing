'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const verses = [
  {
    id: 1,
    surah: 'Al-A\'raf',
    ayat: 26,
    arabic: 'يَٰبَنِىٓ ءَادَمَ قَدْ أَنزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَٰرِى سَوْءَٰتِكُمْ وَرِيشًا ۖ وَلِبَاسُ ٱلتَّقْوَىٰ ذَٰلِكَ خَيْرٌ',
    latin: 'Yā banī ādama qad anzalnā \'alaikum libāsay yuwārī sau\'ātikum warīsyā, wa libāsut-taqwā żālika khaīr',
    arti: '"Wahai anak cucu Adam! Sesungguhnya Kami telah menyediakan pakaian untuk menutupi auratmu dan untuk perhiasan bagimu. Tetapi pakaian takwa, itulah yang lebih baik..."',
    tafsir: 'Ayat ini menegaskan dua fungsi pakaian: (1) sebagai penutup aurat (libāsay yuwārī sau\'ātikum) dan (2) sebagai perhiasan (rīsyā). Namun pakaian yang paling utama adalah pakaian takwa — yaitu iman, akhlak mulia, dan rasa malu yang membentengi diri dari perbuatan dosa.',
    pelajaran: [
      'Pakaian fisik menutup aurat lahiriah',
      'Pakaian takwa menutup aurat batiniah (dosa)',
      'Keseimbangan antara penampilan dan ketakwaan',
    ],
    warna: 'from-emerald-600 to-teal-600',
    icon: '1',
  },
  {
    id: 2,
    surah: 'Al-A\'raf',
    ayat: 31,
    arabic: 'خُذُوا۟ زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ وَكُلُوا۟ وَٱشْرَبُوا۟ وَلَا تُسْرِفُوا۟',
    latin: 'Khużū zīnatakum \'inda kulli masjidin wa kulū wasyrabū wa lā tusrifū',
    arti: '"...Pakailah pakaianmu yang bagus di setiap (memasuki) masjid, makan dan minumlah, tetapi jangan berlebih-lebihan..." (QS. Al-A\'raf: 31)',
    tafsir: 'Ayat ini mengajarkan adab berpakaian saat beribadah — kita dianjurkan memakai pakaian yang bersih, rapi, dan pantas ketika pergi ke masjid. Ini menunjukkan bahwa Islam sangat memperhatikan keindahan dan kebersihan dalam beribadah. Larangan berlebih-lebihan (israf) juga mengingatkan agar tidak bersikap takabbur atau membuang-buang harta.',
    pelajaran: [
      'Bersih dan rapi saat beribadah',
      'Menghindari pamer dan takabbur',
      'Larangan berlebih-lebihan dalam segala hal',
    ],
    warna: 'from-blue-600 to-indigo-600',
    icon: '2',
  },
]

const layers = [
  {
    name: 'Pakaian Fisik',
    desc: 'Menutup aurat lahiriah, melindungi tubuh, dan sebagai perhiasan.',
    icon: '01',
    color: 'bg-teal-100 text-teal-700 border-teal-300',
  },
  {
    name: 'Pakaian Akhlak',
    desc: 'Sopan santun, tutur kata yang baik, dan adab dalam bergaul.',
    icon: '02',
    color: 'bg-blue-100 text-blue-700 border-blue-300',
  },
  {
    name: 'Pakaian Takwa',
    desc: 'Iman, rasa malu, dan kesadaran bahwa Allah selalu melihat.',
    icon: '03',
    color: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  },
]

function VerseCard({ verse, isOpen, onToggle }) {
  return (
    <div
      className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-500"
      data-aos="fade-up"
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 hover:bg-slate-50 transition"
      >
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${verse.warna} flex items-center justify-center text-2xl shrink-0`}>
            {verse.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              QS. {verse.surah} : {verse.ayat}
            </h3>
            <p className="text-sm text-slate-500">
              {isOpen ? 'Klik untuk tutup' : 'Klik untuk lihat tafsir'}
            </p>
          </div>
        </div>
        <svg
          className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 md:px-8 pb-8 space-y-6 border-t border-slate-100 pt-6">
          <div className="text-right">
            <p className="text-3xl md:text-4xl leading-[2.2] text-slate-900 font-semibold" dir="rtl">
              {verse.arabic}
            </p>
          </div>
          <p className="text-sm text-slate-500 italic leading-relaxed">{verse.latin}</p>
          <p className="text-slate-700 leading-relaxed">{verse.arti}</p>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Tafsir Singkat</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{verse.tafsir}</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-3">Pelajaran</h4>
            <div className="space-y-2">
              {verse.pelajaran.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${verse.warna} flex items-center justify-center text-white text-xs font-bold mt-0.5 shrink-0`}>
                    {i + 1}
                  </div>
                  <p className="text-slate-700">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LayerCard({ layer, index }) {
  return (
    <div
      className={`${layer.color} rounded-2xl border-2 p-6 transition-all duration-500 hover:shadow-lg`}
      data-aos="fade-up"
      data-aos-delay={index * 150}
    >
      <div className="text-4xl mb-3">{layer.icon}</div>
      <h3 className="font-bold text-lg mb-2">{layer.name}</h3>
      <p className="text-sm leading-relaxed opacity-80">{layer.desc}</p>
    </div>
  )
}

export default function PosterAdabBerpakaian() {
  const [openVerse, setOpenVerse] = useState(null)

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  const toggleVerse = (id) =>
    setOpenVerse((prev) => (prev === id ? null : id))

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #059669, #10b981, #34d399, #10b981, #059669);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      <Navbar backHref="/kurikulum" backLabel="Kembali ke Kurikulum" />

      {/* HERO — Poster Display */}
      <section className="relative min-h-[70vh] flex items-center justify-center hero-gradient overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-6 py-16 max-w-4xl mx-auto">
          <span
            className="inline-block text-emerald-400 font-semibold tracking-widest uppercase text-xs mb-4 border border-emerald-700/50 px-4 py-1.5 rounded-full"
            data-aos="fade-down"
          >
            Poster Interaktif — QS. Al-A&apos;raf
          </span>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Adab{' '}
            <span className="shimmer-text">Berpakaian</span>
            <br />
            dalam Islam
          </h1>

          <p
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Pakaian bukan sekadar penutup tubuh. Ia adalah identitas, perhiasan,
            dan yang terpenting — cerminan ketakwaan kepada Allah SWT.
          </p>

          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="#ayat"
              className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition transform shadow-lg shadow-emerald-500/30"
            >
              Baca Ayat
            </a>
          </div>

          {/* Poster image */}
          <div
            className="mt-12 mx-auto max-w-2xl rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/50"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src="/asset/img/poster_adab_berpakaian.png"
              alt="Poster Adab Berpakaian"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* AYAT SECTION */}
      <section id="ayat" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Ayat Al-Qur&apos;an
          </h2>
          <p className="text-slate-500 mt-3 italic">
            Klik masing-masing ayat untuk melihat tafsir dan pelajaran
          </p>
        </div>

        <div className="space-y-6">
          {verses.map((verse) => (
            <VerseCard
              key={verse.id}
              verse={verse}
              isOpen={openVerse === verse.id}
              onToggle={() => toggleVerse(verse.id)}
            />
          ))}
        </div>
      </section>

      {/* THREE LAYERS OF CLOTHING */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs">
              Konsep Pakaian dalam Islam
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Tiga Lapisan Pakaian
            </h2>
            <p className="text-slate-400 mt-3 italic">
              Dari fisik hingga spiritual — pakaian sejati mencakup seluruh diri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {layers.map((layer, i) => (
              <LayerCard key={layer.name} layer={layer} index={i} />
            ))}
          </div>

          <div
            className="mt-12 bg-slate-800 rounded-3xl p-8 border border-slate-700 text-center"
            data-aos="fade-up"
          >
            <p className="text-emerald-400 text-3xl font-bold mb-2">QS. Al-A&apos;raf : 26</p>
            <p className="text-slate-300 text-lg italic">
              &quot;...Dan pakaian takwa, itulah yang lebih baik.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE BOTTOM */}
      <section className="py-16 px-6 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <p className="text-emerald-300/80 text-sm font-semibold tracking-widest uppercase mb-4">
            Renungan
          </p>
          <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed">
            &quot;Sebaik-baik pakaian adalah yang menutup aurat,
            <br />
            seindah-indah perhiasan adalah akhlak,
            <br />
            dan setinggi-tinggi martabat adalah takwa.&quot;
          </blockquote>
          <p className="text-emerald-400/60 mt-6 text-sm">
            — Eduide, 2026
          </p>
        </div>
      </section>

      <Footer simple={false} />
    </>
  )
}
