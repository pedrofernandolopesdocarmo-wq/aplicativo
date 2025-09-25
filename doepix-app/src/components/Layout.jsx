
import { Link, NavLink } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg">DoePix</Link>
          <nav className="flex items-center gap-4 text-sm">
            <NavLink to="/" className={({isActive}) => isActive ? 'font-semibold' : ''}>Início</NavLink>
            <NavLink to="/campanhas/nova">Criar campanha</NavLink>
            <NavLink to="/creditos">Créditos</NavLink>
            <NavLink to="/login" className="btn btn-primary">Entrar</NavLink>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} DoePix — Crowdfunding via Pix
        </div>
      </footer>
    </div>
  )
}
