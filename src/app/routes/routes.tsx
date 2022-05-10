import { Outlet, ReactLocation, Router } from '@tanstack/react-location'

import { publicRoutes } from './public-routes'

const location = new ReactLocation()

export const AppRoutes = () => {
  return (
    <Router location={location} routes={publicRoutes}>
      <Outlet />
    </Router>
  )
}
