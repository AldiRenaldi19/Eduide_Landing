'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AshabulKahfiPage() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <>
      <Navbar backHref="/kurikulum" backLabel="Kembali ke List" />

      <article className="max-w-4xl mx-auto py-16 px-6" data-aos="fade-up">
        <header className="mb-12">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-xs">
            Kisah Pemuda
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            Ashabul Kahfi: Menjaga Iman di Tengah Fitnah
          </h1>
          <img
            src="/asset/img/ashabul-kahfi.jpeg"
            className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
            alt="Ashabul Kahfi"
          />
        </header>

        <div className="max-w-none space-y-6 text-slate-700 text-lg">
          <p className="font-semibold text-xl text-slate-800">
            Siapakah Ashabul Kahfi?
          </p>
          <p>
            Kisah ini menceritakan tentang sekelompok pemuda beriman yang hidup di
            masa Raja Dikyanus yang zalim. Mereka dipaksa untuk menyembah berhala,
            namun mereka memilih untuk teguh pada tauhid dan melarikan diri ke
            sebuah gua demi menjaga kesucian iman mereka.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-2xl italic text-teal-900">
            &quot;Dan Kami teguhkan hati mereka di waktu mereka berdiri, lalu mereka
            pun berkata, &apos;Tuhan kami adalah Tuhan seluruh langit dan bumi...&apos;&quot;
            (QS. Al-Kahfi: 14)
          </div>

          <p className="font-semibold text-xl text-slate-800 mt-8 text-teal-600">
            Relevansi di Era Digital
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Digital Detox:</strong> Sebagaimana pemuda Kahfi menepi ke
              gua, terkadang kita perlu &quot;menepi&quot; dari hiruk pikuk media sosial
              untuk menjaga kesehatan mental dan iman.
            </li>
            <li>
              <strong>Teguh Prinsip:</strong> Di era di mana tren seringkali
              bertentangan dengan nilai agama, Ashabul Kahfi mengajarkan kita
              untuk tidak takut menjadi berbeda demi kebenaran.
            </li>
            <li>
              <strong>Kekuatan Komunitas:</strong> Mereka tidak sendirian,
              melainkan saling menguatkan. Begitu juga kita butuh lingkungan
              digital yang positif.
            </li>
          </ul>
        </div>
      </article>

      <Footer simple={false} />
    </>
  )
}
