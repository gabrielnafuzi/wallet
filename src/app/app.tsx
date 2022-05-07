import { AppProvider } from './providers'
import { AppRoutes } from './routes'

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
