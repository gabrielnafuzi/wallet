import { SetState, GetState } from 'zustand'

import { State } from '../use-store'
import { Token, WalletSlice } from './types'
import { canAddToken, canUpdateToken } from './validators'

export const createWalletSlice = (
  set: SetState<State>,
  get: GetState<State>
): WalletSlice => {
  return {
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
  }
}
