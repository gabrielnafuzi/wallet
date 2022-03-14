import { createContext, useMemo, useReducer } from 'react'

import { parseJSON } from '@/utils/parse-json'

import { WALLET_STORAGE_KEY } from '../../constants/storage-keys'
import {
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

  const actions = useMemo(
    () => ({
      addToken: (token: Token) => {
        dispatch({ type: 'ADD', payload: token })
      },
      removeToken: (id: string) => {
        dispatch({ type: 'REMOVE', payload: id })
      },
      updateToken: (token: Token) => {
        dispatch({ type: 'UPDATE', payload: token })
      },
    }),
    []
  )

  return (
    <WalletContext.Provider value={{ tokens, ...actions }}>
      {children}
    </WalletContext.Provider>
  )
}
