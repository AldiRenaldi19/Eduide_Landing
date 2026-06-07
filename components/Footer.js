export default function Footer({ simple }) {
  if (simple) {
    return (
      <footer className="bg-white border-t border-slate-100 py-8 px-6 text-center text-slate-400 text-xs">
        <p>© 2026 Aldi Renaldi - Eduide Curriculum Project</p>
      </footer>
    )
  }

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Eduide.</h2>
      <p className="text-xs">© 2026 Aldi Renaldi - Proyek Akademik</p>
    </footer>
  )
}
