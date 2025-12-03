import { Routes, Route } from 'react-router-dom'
import type { ReactElement } from 'react'
import { routes } from './routes'

function App(): ReactElement {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default App

