import { useCallback } from 'react'

import { useNavigate } from '@tanstack/react-location'
import { nanoid } from 'nanoid'
import type { SubmitHandler } from 'react-hook-form'

import { useWalletStore } from '@/store'
import { showToast } from '@/utils/toast'

import type { FormValues } from '~wallet/common'

export const useAddToken = () => {
  const addToken = useWalletStore((state) => state.addToken)
  const navigate = useNavigate()

  const onSuccess = useCallback(
    (name: string) => {
      showToast({
        title: `Token ${name} created.`,
        description: 'Go to home page to see it.',
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

  const handleAddToken: SubmitHandler<FormValues> = useCallback(
    ({ name, balance }) => {
      const { error } = addToken({
        id: nanoid(),
        name,
        balance,
      })

      error ? onError(error) : onSuccess(name)
    },
    [addToken, onError, onSuccess]
  )

  return handleAddToken
}
