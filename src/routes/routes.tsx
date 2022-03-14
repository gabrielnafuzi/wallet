import { useRoutes } from 'react-router-dom'

import { publicRoutes } from './public-routes'

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes)

  return <>{element}</>
}
