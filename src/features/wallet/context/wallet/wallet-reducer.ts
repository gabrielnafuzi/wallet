import { WALLET_STORAGE_KEY } from '../../constants/storage-keys'
import { WalletAction, WalletActionKind, WalletState } from './types'

const reducer = (state: WalletState, action: WalletAction) => {
  const { type, payload } = action

  switch (type) {
    case WalletActionKind.ADD: {
      return {
        ...state,
        tokens: [...state.tokens, payload],
      }
    }
    case WalletActionKind.REMOVE: {
      return {
        ...state,
        tokens: state.tokens.filter((token) => token.id !== payload),
      }
    }
    case WalletActionKind.UPDATE: {
      const newTokens = state.tokens.map((token) => {
        if (token.id === payload.id) {
          return payload
        }

        return token
      })

      console.log(newTokens)

      return {
        ...state,
        tokens: newTokens,
      }
    }
    default: {
      return state
    }
  }
}

export const walletReducer = (state: WalletState, action: WalletAction) => {
  const result = reducer(state, action)

  localStorage.setItem(WALLET_STORAGE_KEY, JSON.stringify(result))

  return result
}
