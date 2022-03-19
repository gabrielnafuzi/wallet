export type Token = {
  id: string
  name: string
  balance: string
}

export type WalletStore = {
  tokens: Token[]
  addToken: (token: Token) => void
  removeToken: (id: string) => void
  updateToken: (token: Token) => void
  getToken: (tokenId?: string) => Token | null
}
