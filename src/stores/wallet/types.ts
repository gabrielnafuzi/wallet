type Response = {
  error: string | null
}

export type Token = {
  id: string
  name: string
  balance: string
}

export type WalletStore = {
  tokens: Token[]
  addToken: (token: Token) => Response
  removeToken: (id: string) => void
  updateToken: (token: Token) => Response
  getToken: (tokenId?: string) => Token | null
}
