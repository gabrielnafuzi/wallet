import { createContext, useCallback, useMemo, useReducer } from 'react'

import { parseJSON } from '@/utils/parse-json'

import { WALLET_STORAGE_KEY } from '../../constants/storage-keys'
import type {
  WalletContextValue,
  WalletContextProps,
  WalletState,
  Token,
} from './types'
import { walletReducer } from './wallet-reducer'

export const WalletContext = createContext<WalletContextValue>(
  {} as WalletContextValue
)

const defaultState: WalletState = {
  tokens: [],
}

const initialState: WalletState =
  parseJSON(localStorage.getItem(WALLET_STORAGE_KEY)) ?? defaultState

export const WalletProvider = ({ children }: WalletContextProps) => {
  const [{ tokens }, dispatch] = useReducer(walletReducer, initialState)

  const checkIfTokenExists = useCallback(
    (token: Token) => {
      const maybeToken = tokens.find(({ name }) => name === token.name)
      const isSameAsToken = maybeToken?.id === token.id

      if (!!maybeToken && !isSameAsToken) {
        throw new Error('Token already exists')
      }

      return false
    },
    [tokens]
  )

  const actions = useMemo(
    () => ({
      addToken: (token: Token) => {
        checkIfTokenExists(token) || dispatch({ type: 'ADD', payload: token })
      },
      removeToken: (id: string) => {
        dispatch({ type: 'REMOVE', payload: id })
      },
      updateToken: (token: Token) => {
        checkIfTokenExists(token) ||
          dispatch({ type: 'UPDATE', payload: token })
      },
    }),
    [checkIfTokenExists]
  )

  const getToken = useCallback(
    (tokenId?: string) => {
      return tokens.find(({ id }) => id === tokenId) ?? null
    },
    [tokens]
  )

  return (
    <WalletContext.Provider value={{ tokens, getToken, ...actions }}>
      {children}
    </WalletContext.Provider>
  )
}
