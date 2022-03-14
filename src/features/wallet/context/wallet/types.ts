import type { Token } from '../../types'

export type WalletContextValue = {
  tokens: Token[]
  addToken: (token: Token) => void
  removeToken: (id: string) => void
  updateToken: (token: Token) => void
}

export type WalletContextProps = {
  children: React.ReactNode
}

export type WalletState = {
  tokens: Token[]
}

export enum WalletActionKind {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  UPDATE = 'UPDATE',
}

export type WalletAction =
  | { type: 'ADD'; payload: Token }
  | { type: 'REMOVE'; payload: string }
  | { type: 'UPDATE'; payload: Token }

export type { Token } from '../../types'
