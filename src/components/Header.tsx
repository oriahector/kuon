import { Link, useLocation } from 'react-router-dom'
import type { ReactElement } from 'react'
import { routes } from '../routes'
import Logo from './Logo'

function Header(): ReactElement {
  const location = useLocation()

  const isActive = (path: string): boolean => {
    return location.pathname === path
  }

  const headerRoutes = routes.filter((route) => route.path !== '/')

  return (
    <header className="bg-[#faf9f7] border-b border-slate-300/30 sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 text-slate-700 hover:text-slate-600 transition-colors"
          >
            <Logo width={24} height={24} className="text-slate-600" />
            <span className="text-base font-light tracking-wide">Kuon</span>
            <span className="text-xs text-slate-500/50 font-light">永遠</span>
          </Link>
          <div className="flex gap-8">
            <Link
              to="/"
              className={`text-sm uppercase tracking-wider transition-colors font-light ${
                isActive('/')
                  ? 'text-slate-700'
                  : 'text-slate-500/70 hover:text-slate-700'
              }`}
            >
              Inicio
            </Link>
            {headerRoutes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-sm uppercase tracking-wider transition-colors font-light ${
                  isActive(route.path)
                    ? 'text-slate-700'
                    : 'text-slate-500/70 hover:text-slate-700'
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
