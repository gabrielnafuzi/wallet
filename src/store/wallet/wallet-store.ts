import create from 'zustand'
import { persist } from 'zustand/middleware'

import { WALLET_STORAGE_KEY } from '@/constants/storage-keys'

import { Token, WalletStore } from './types'
import { canAddToken, canUpdateToken } from './validators'

export const useWalletStore = create<WalletStore>(
  persist(
    (set, get) => ({
      tokens: [],

      addToken: (newToken: Token) => {
        if (!canAddToken(newToken, get().tokens)) {
          return
        }

        set((state) => ({
          ...state,
          tokens: [...state.tokens, newToken],
        }))
      },

      removeToken: (tokenId: string) => {
        set((state) => ({
          ...state,
          tokens: state.tokens.filter((token) => token.id !== tokenId),
        }))
      },

      updateToken: (updatedToken: Token) => {
        if (!canUpdateToken(updatedToken, get().tokens)) {
          return
        }

        set((state) => ({
          ...state,
          tokens: state.tokens.map((token) =>
            token.id === updatedToken.id ? updatedToken : token
          ),
        }))
      },

      getToken: (tokenId?: string) => {
        return get().tokens.find((token) => token.id === tokenId) ?? null
      },
    }),
    {
      name: WALLET_STORAGE_KEY,
    }
  )
)
