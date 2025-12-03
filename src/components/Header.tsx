import { Link, useLocation } from 'react-router-dom'
import type { ReactElement } from 'react'
import { routes } from '../routes'

function Header(): ReactElement {
  const location = useLocation()

  const isActive = (path: string): boolean => {
    return location.pathname === path
  }

  // Filtrar rutas para el header (excluir la home si quieres, o incluir todas)
  const headerRoutes = routes.filter((route) => route.path !== '/')

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-rose-600">
            Kuon
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/')
                  ? 'text-rose-600 font-semibold'
                  : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              Inicio
            </Link>
            {headerRoutes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive(route.path)
                    ? 'text-rose-600 font-semibold'
                    : 'text-gray-700 hover:text-rose-600'
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

