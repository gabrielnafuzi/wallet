import { useCallback } from 'react'

import { useNavigate } from '@tanstack/react-location'

import { showToast } from '@/utils/toast'

import { useWallet } from '~wallet/hooks'
import type { Token } from '~wallet/types'

export const useRemoveToken = (token: Token) => {
  const { removeToken } = useWallet()
  const navigate = useNavigate()

  const handleRemoveToken = useCallback(() => {
    try {
      removeToken(token.id)

      showToast({
        title: `Token ${token.name} removed.`,
        status: 'success',
      })

      navigate({ to: '/' })
    } catch (error) {
      const title = (error as Error).message ?? 'Something went wrong'

      showToast({
        title,
        description: 'Please try again.',
        status: 'error',
      })
    }
  }, [navigate, removeToken, token?.id, token?.name])

  return handleRemoveToken
}
