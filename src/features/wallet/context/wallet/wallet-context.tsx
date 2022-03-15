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
    (tokenName: string) => {
      return tokens.some(({ token }) => token === tokenName)
    },
    [tokens]
  )

  const actions = useMemo(
    () => ({
      addToken: (token: Token) => {
        const tokenExists = checkIfTokenExists(token.token)

        if (tokenExists) {
          throw new Error('Token already exists')
        }

        dispatch({ type: 'ADD', payload: token })
      },
      removeToken: (id: string) => {
        dispatch({ type: 'REMOVE', payload: id })
      },
      updateToken: (token: Token) => {
        dispatch({ type: 'UPDATE', payload: token })
      },
    }),
    [checkIfTokenExists]
  )

  return (
    <WalletContext.Provider value={{ tokens, ...actions }}>
      {children}
    </WalletContext.Provider>
  )
}
