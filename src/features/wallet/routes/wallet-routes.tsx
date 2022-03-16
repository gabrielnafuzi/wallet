import { Suspense } from 'react'

import { Navigate, Outlet, Route } from '@tanstack/react-location'

import { FullPageSpinner } from '@/components'
import { MainLayout } from '@/components/layout'
import { LocationGenerics } from '@/routes/types'
import { lazyImport } from '@/utils/lazy-import'

import { WalletProvider } from '../context'

const { AddToken } = lazyImport(() => import('./add-token'), 'AddToken')
const { EditToken } = lazyImport(() => import('./edit-token'), 'EditToken')
const { Tokens } = lazyImport(() => import('./tokens'), 'Tokens')

const WalletApp = () => {
  return (
    <WalletProvider>
      <MainLayout>
        <Suspense fallback={<FullPageSpinner />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    </WalletProvider>
  )
}

export const walletRoutes: Route<LocationGenerics>[] = [
  {
    path: '',
    element: <WalletApp />,
    children: [
      {
        path: '/',
        element: <Tokens />,
      },
      {
        path: '/add-token',
        element: <AddToken />,
      },
      {
        path: '/edit-token/:tokenId',
        element: <EditToken />,
      },
      {
        element: <Navigate to="/" />,
      },
    ],
  },
]
