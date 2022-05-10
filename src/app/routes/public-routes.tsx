import { Route } from '@tanstack/react-location'

import { walletRoutes } from '@/features/wallet'

export const publicRoutes: Route[] = [...walletRoutes]
