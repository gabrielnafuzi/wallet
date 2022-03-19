import { Token } from './types'

const throwSameTokenError = () => {
  throw new Error('Token with this name already exists')
}

const isSomeTokenWithSameName = (tokenName: string, tokens: Token[]) => {
  return tokens.some((token) => token.name === tokenName)
}

const isSameToken = (token: Token, tokens: Token[]) => {
  const maybeToken = tokens.find(({ name }) => name === token.name)

  return maybeToken?.id === token.id
}

export const canAddToken = (token: Token, tokens: Token[]) => {
  if (isSomeTokenWithSameName(token.name, tokens)) {
    throwSameTokenError()
  }

  return true
}

export const canUpdateToken = (token: Token, tokens: Token[]) => {
  if (
    isSomeTokenWithSameName(token.name, tokens) &&
    !isSameToken(token, tokens)
  ) {
    throwSameTokenError()
  }

  return true
}
