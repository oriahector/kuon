import type { ReactElement } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Configurador from './pages/Configurador'

export interface RouteConfig {
  path: string
  element: ReactElement
  label: string
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
    label: 'Inicio',
  },
  {
    path: '/configurador',
    element: <Configurador />,
    label: 'Configurador',
  },
  {
    path: '/contact',
    element: <Contact />,
    label: 'Contacto',
  },
]

