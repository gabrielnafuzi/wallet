import { Suspense } from 'react'

import { Navigate, Outlet, Route } from '@tanstack/react-location'

import { FullPageSpinner } from '@/components'
import { MainLayout } from '@/components/layout'
import { lazyImport } from '@/utils/lazy-import'

const { AddTokenPage } = lazyImport(() => import('../pages'), 'AddTokenPage')
const { EditTokenPage } = lazyImport(() => import('../pages'), 'EditTokenPage')
const { TokensPage } = lazyImport(() => import('../pages'), 'TokensPage')

const WalletApp = () => {
  return (
    <MainLayout>
      <Suspense fallback={<FullPageSpinner />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const walletRoutes: Route[] = [
  {
    element: <WalletApp />,
    children: [
      {
        path: '/',
        element: <TokensPage />,
      },
      {
        path: '/add-token',
        element: <AddTokenPage />,
      },
      {
        path: '/edit-token/:tokenId',
        element: <EditTokenPage />,
      },
      {
        element: <Navigate to="/" />,
      },
    ],
  },
]
