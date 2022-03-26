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
        const { error } = canAddToken(newToken, get().tokens)

        if (error) {
          return { error }
        }

        set((state) => ({
          ...state,
          tokens: [...state.tokens, newToken],
        }))

        return { error }
      },

      removeToken: (tokenId: string) => {
        set((state) => ({
          ...state,
          tokens: state.tokens.filter((token) => token.id !== tokenId),
        }))
      },

      updateToken: (updatedToken: Token) => {
        if (!canUpdateToken(updatedToken, get().tokens)) {
          return { error: '' }
        }

        set((state) => ({
          ...state,
          tokens: state.tokens.map((token) =>
            token.id === updatedToken.id ? updatedToken : token
          ),
        }))

        return { error: null }
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
