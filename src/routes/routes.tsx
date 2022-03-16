import { Outlet, ReactLocation, Router } from '@tanstack/react-location'

import { publicRoutes } from './public-routes'
import { LocationGenerics } from './types'

const location = new ReactLocation<LocationGenerics>()

export const AppRoutes = () => {
  return (
    <Router location={location} routes={publicRoutes}>
      <Outlet />
    </Router>
  )
}
