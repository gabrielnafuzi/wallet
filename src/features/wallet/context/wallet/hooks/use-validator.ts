import { useCallback } from 'react'

import { Token } from '../types'

const throwSameTokenError = () => {
  throw new Error('Token with this name already exists')
}

export const useValidator = (tokens: Token[]) => {
  const isSomeTokenWithSameName = useCallback(
    (tokenName: string) => {
      return tokens.some((token) => token.name === tokenName)
    },
    [tokens]
  )

  const isSameToken = useCallback(
    (token: Token) => {
      const maybeToken = tokens.find(({ name }) => name === token.name)

      return maybeToken?.id === token.id
    },
    [tokens]
  )

  const validateBeforeAddToken = useCallback(
    (token: Token) => {
      if (isSomeTokenWithSameName(token.name)) {
        throwSameTokenError()
      }

      return true
    },
    [isSomeTokenWithSameName]
  )

  const validateBeforeUpdate = useCallback(
    (token: Token) => {
      if (isSomeTokenWithSameName(token.name) && !isSameToken(token)) {
        throwSameTokenError()
      }

      return true
    },
    [isSameToken, isSomeTokenWithSameName]
  )

  return {
    validateBeforeAddToken,
    validateBeforeUpdate,
  }
}
