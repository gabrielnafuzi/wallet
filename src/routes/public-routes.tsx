import { RouteObject } from 'react-router-dom'

import { lazyImport } from '@/utils/lazy-import'

const { WalletRoutes } = lazyImport(
  () => import('@/features/wallet'),
  'WalletRoutes'
)

export const publicRoutes: RouteObject[] = [
  {
    path: '/*',
    element: <WalletRoutes />,
  },
]
