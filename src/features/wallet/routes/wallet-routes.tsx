import { Suspense } from 'react'

import { Outlet, Route, Routes } from 'react-router-dom'

import { FullPageSpinner } from '@/components'
import { MainLayout } from '@/components/layout'
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

export const WalletRoutes = () => {
  return (
    <Routes>
      <Route element={<WalletApp />}>
        <Route path="/" element={<Tokens />} />
        <Route path="/add-token" element={<AddToken />} />
        <Route path="/edit-token/:id" element={<EditToken />} />
      </Route>
    </Routes>
  )
}
