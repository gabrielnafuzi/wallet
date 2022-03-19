import create from 'zustand'
import { persist } from 'zustand/middleware'

import { WALLET_STORAGE_KEY } from '@/constants/storage-keys'

import { WalletSlice } from './wallet-slice/types'
import { createWalletSlice } from './wallet-slice/wallet-slice'

export type State = WalletSlice

export const useStore = create<State>(
  persist(
    (set, get) => ({
      ...createWalletSlice(set, get),
    }),
    {
      name: WALLET_STORAGE_KEY,
    }
  )
)
