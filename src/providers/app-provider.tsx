import { Suspense } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'

import { ErrorBoundaryFallback, FullPageSpinner } from '@/components'
import { theme } from '@/styles/theme'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<FullPageSpinner />}>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
          <BrowserRouter>{children}</BrowserRouter>
        </ErrorBoundary>
      </Suspense>
    </ChakraProvider>
  )
}
