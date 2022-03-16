import { useMemo } from 'react'

import { Token, WalletAction } from '../types'
import { useValidator } from './use-validator'

export const useActions = (
  tokens: Token[],
  dispatch: React.Dispatch<WalletAction>
) => {
  const { validateBeforeAddToken, validateBeforeUpdate } = useValidator(tokens)

  return useMemo(
    () => ({
      addToken: (token: Token) => {
        validateBeforeAddToken(token) &&
          dispatch({ type: 'ADD', payload: token })
      },
      removeToken: (id: string) => {
        dispatch({ type: 'REMOVE', payload: id })
      },
      updateToken: (token: Token) => {
        validateBeforeUpdate(token) &&
          dispatch({ type: 'UPDATE', payload: token })
      },
    }),
    [dispatch, validateBeforeAddToken, validateBeforeUpdate]
  )
}
