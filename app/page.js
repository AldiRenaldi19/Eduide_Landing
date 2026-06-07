'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  const toggleModal = () => {
    const body = document.querySelector('body')
    const modal = document.querySelector('#modalBelajar')
    if (!modal) return
    const container = modal.querySelector('.modal-container')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
    container?.classList.toggle('scale-95')
    container?.classList.toggle('scale-100')
  }

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="hero-gradient min-h-screen flex items-center pt-20 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="text-teal-400 font-semibold tracking-widest uppercase text-sm">
              Pendidikan Agama & Teknologi
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-4">
              Navigasi Iman di{' '}
              <span className="text-teal-400">Dunia Digital.</span>
            </h1>
            <p className="text-slate-400 mt-6 text-lg leading-relaxed">
              Menghubungkan nilai-nilai spiritualitas dengan tantangan teknologi
              masa kini. Pelajari etika, hukum, dan kebijaksanaan dalam satu
              platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#kurikulum"
                className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition transform text-center shadow-lg shadow-teal-500/20"
              >
                Eksplorasi Kelas
              </a>
              <a
                href="#video-demo"
                className="border border-slate-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition text-center"
              >
                Video Demo
              </a>
            </div>
          </div>
          <div
            className="hidden md:block w-full h-[450px] overflow-hidden rounded-3xl shadow-2xl border border-slate-700"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1000"
              alt="Hero"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['12+', 'Modul Spesial'],
            ['5K+', 'Pelajar Aktif'],
            ['100%', 'Akses Gratis'],
            ['4.9/5', 'Rating Puas'],
          ].map(([num, label], i) => (
            <div key={label} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="text-3xl font-bold text-teal-600">{num}</div>
              <div className="text-slate-500 text-sm italic">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="kurikulum" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase tracking-tight">
            Kurikulum Unggulan
          </h2>
          <p className="text-slate-500 mt-4 italic">
            Pilih materi yang ingin Anda pelajari secara mendalam.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition group"
            data-aos="fade-up"
          >
            <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-1.428A9.964 9.964 0 0011 21M12 11c0-3.517 1.009-6.799 2.753-9.571m3.44 1.428A9.964 9.964 0 0113 3M12 11V5l-1.5 2.5h3L12 5v6z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Fikih Media Sosial</h3>
            <p className="text-slate-600 text-sm mb-6">
              Hukum menyebar konten, adab berkomentar, dan etika digital.
            </p>
            <button
              onClick={toggleModal}
              className="text-teal-600 font-bold text-sm hover:underline"
            >
              Pelajari Sekarang →
            </button>
          </div>

          <div
            className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI & Etika Agama</h3>
            <p className="text-slate-600 text-sm mb-6">
              Batasan penggunaan AI dalam ibadah dan tanggung jawab moral.
            </p>
            <button
              onClick={toggleModal}
              className="text-blue-600 font-bold text-sm hover:underline"
            >
              Pelajari Sekarang →
            </button>
          </div>

          <div
            className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Kesehatan Mental</h3>
            <p className="text-slate-600 text-sm mb-6">
              Pendekatan spiritual untuk mengatasi kecemasan di media sosial.
            </p>
            <button
              onClick={toggleModal}
              className="text-purple-600 font-bold text-sm hover:underline"
            >
              Pelajari Sekarang →
            </button>
          </div>

          <div
            className="p-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl shadow-lg shadow-teal-200 hover:scale-105 transition transform group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Kisah Al-Qur'an</h3>
            <p className="text-teal-50 text-sm mb-6">
              Pelajaran dari sejarah masa lalu untuk era digital saat ini.
            </p>
            <Link
              href="/kurikulum"
              className="inline-block bg-white text-teal-600 font-bold text-sm px-6 py-3 rounded-xl hover:bg-teal-50 transition"
            >
              Buka Artikel →
            </Link>
          </div>
        </div>
      </section>

      <section id="video-demo" className="py-16 md:py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8" data-aos="fade-down">
            Video Demo Platform
          </h2>
          <div
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800"
            data-aos="zoom-in"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/lrXaUnOK2J4"
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section
        id="tentang"
        className="py-16 md:py-24 px-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center"
      >
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Misi Eduide.</h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Proyek ini merupakan bentuk pengabdian akademik untuk mata kuliah
            Agama Islam Semester 6. Eduide lahir dari keresahan akan konflik etika
            di ruang digital.
          </p>
          <p className="text-slate-600 leading-relaxed italic">
            Teknologi yang canggih harus diimbangi dengan karakter dan akhlak yang
            kuat.
          </p>
        </div>
        <div
          className="flex-1 bg-white p-8 rounded-3xl shadow-lg border border-slate-100"
          data-aos="fade-left"
        >
          <h4 className="font-bold mb-4 text-teal-600 border-b pb-2">
            Informasi Mahasiswa
          </h4>
          <div className="space-y-3 text-sm text-slate-600 font-medium">
            <p><strong>Nama:</strong> Aldi Renaldi W</p>
            <p><strong>NIM:</strong> 312310812</p>
            <p><strong>Kelas:</strong> I233D</p>
            <p><strong>Program Studi:</strong> Teknik Informatika</p>
            <p><strong>Semester:</strong> 6 (Enam)</p>
            <p><strong>Mata Kuliah:</strong> Pendidikan Agama Islam</p>
          </div>
        </div>
      </section>

      <div
        id="modalBelajar"
        className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center z-[100]"
      >
        <div
          className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          onClick={toggleModal}
        />
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-3xl shadow-lg z-[101] overflow-hidden transform scale-95 transition-transform">
          <div className="p-10 text-center">
            <h3 className="text-2xl font-bold text-teal-600 italic mb-4">
              Selamat Belajar!
            </h3>
            <p className="text-slate-600 mb-8">
              Anda akan segera diarahkan ke sistem Learning Management System
              (LMS) kami.
            </p>
            <button className="w-full bg-teal-600 text-white p-4 rounded-xl font-bold hover:bg-teal-700 transition">
              Masuk Ke Ruang Kelas
            </button>
            <button
              onClick={toggleModal}
              className="mt-4 text-slate-400 text-sm"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
