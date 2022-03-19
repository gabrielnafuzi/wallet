import { useCallback } from 'react'

import { useNavigate } from '@tanstack/react-location'

import { useWalletStore } from '@/store'
import type { Token } from '@/store'
import { showToast } from '@/utils/toast'

export const useRemoveToken = (token: Token) => {
  const removeToken = useWalletStore((state) => state.removeToken)
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
