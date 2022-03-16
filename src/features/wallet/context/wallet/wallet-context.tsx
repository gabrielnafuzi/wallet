import { createContext, useCallback, useReducer } from 'react'

import { parseJSON } from '@/utils/parse-json'

import { WALLET_STORAGE_KEY } from '~wallet/constants/storage-keys'

import { useActions } from './hooks'
import type {
  WalletContextProps,
  WalletContextValue,
  WalletState,
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

  const getToken = useCallback(
    (tokenId?: string) => {
      return tokens.find(({ id }) => id === tokenId) ?? null
    },
    [tokens]
  )

  return (
    <WalletContext.Provider
      value={{ tokens, getToken, ...useActions(tokens, dispatch) }}
    >
      {children}
    </WalletContext.Provider>
  )
}
