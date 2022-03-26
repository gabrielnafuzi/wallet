import { Token } from './types'

const SAME_TOKEN_ERROR_MESSAGE = 'Token with this name already exists'

type ValidatorResponse = {
  error: string | null
}

const isSomeTokenWithSameName = (tokenName: string, tokens: Token[]) => {
  return tokens.some((token) => token.name === tokenName)
}

const isSameToken = (token: Token, tokens: Token[]) => {
  const maybeToken = tokens.find(({ name }) => name === token.name)

  return maybeToken?.id === token.id
}

export const canAddToken = (
  token: Token,
  tokens: Token[]
): ValidatorResponse => {
  if (isSomeTokenWithSameName(token.name, tokens)) {
    return {
      error: SAME_TOKEN_ERROR_MESSAGE,
    }
  }

  return {
    error: null,
  }
}

export const canUpdateToken = (
  token: Token,
  tokens: Token[]
): ValidatorResponse => {
  if (
    isSomeTokenWithSameName(token.name, tokens) &&
    !isSameToken(token, tokens)
  ) {
    return {
      error: SAME_TOKEN_ERROR_MESSAGE,
    }
  }

  return {
    error: null,
  }
}
