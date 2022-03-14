import { Suspense } from 'react'

import { Outlet, Route, Routes } from 'react-router-dom'

import { FullPageSpinner } from '@/components'
import { MainLayout } from '@/components/layout'

import { WalletProvider } from '../context'
import { AddToken } from './add-token'
import { EditToken } from './edit-token'
import { Tokens } from './tokens'

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
