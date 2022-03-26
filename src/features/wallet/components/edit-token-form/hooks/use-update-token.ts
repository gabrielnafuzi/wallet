import { useCallback } from 'react'

import { useNavigate } from '@tanstack/react-location'
import type { SubmitHandler } from 'react-hook-form'

import { useWalletStore } from '@/store'
import type { Token } from '@/store'
import { showToast } from '@/utils/toast'

import type { FormValues } from '~wallet/common'

export const useUpdateToken = (selectedToken: Token) => {
  const updateToken = useWalletStore((state) => state.updateToken)
  const navigate = useNavigate()

  const onSuccess = useCallback(
    (name: string) => {
      showToast({
        title: `Token ${name} updated.`,
        status: 'success',
      })

      navigate({ to: '/' })
    },
    [navigate]
  )

  const onError = useCallback((error: string) => {
    showToast({
      title: error,
      description: 'Please try again.',
      status: 'error',
    })
  }, [])

  const handleUpdateToken: SubmitHandler<FormValues> = useCallback(
    ({ name, balance }) => {
      const { error } = updateToken({
        ...selectedToken,
        name,
        balance,
      })

      error ? onError(error) : onSuccess(name)
    },
    [onError, onSuccess, selectedToken, updateToken]
  )

  return handleUpdateToken
}
