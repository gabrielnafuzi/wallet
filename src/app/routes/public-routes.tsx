import { Route } from '@tanstack/react-location'

import { walletRoutes } from '@/features/wallet'

import { LocationGenerics } from './types'

export const publicRoutes: Route<LocationGenerics>[] = [...walletRoutes]
