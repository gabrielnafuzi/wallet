import { useCallback } from 'react'

import { useNavigate } from '@tanstack/react-location'
import type { SubmitHandler } from 'react-hook-form'

import { showToast } from '@/utils/toast'

import type { FormValues } from '~wallet/common'
import { useWallet } from '~wallet/hooks'
import { Token } from '~wallet/types'

export const useUpdateToken = (selectedToken: Token) => {
  const { updateToken } = useWallet()
  const navigate = useNavigate()

  const handleUpdateToken: SubmitHandler<FormValues> = useCallback(
    ({ name, balance }) => {
      console.log('was called')

      try {
        updateToken({
          ...selectedToken,
          name,
          balance,
        })

        showToast({
          title: `Token ${name} updated.`,
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
    },
    [navigate, selectedToken, updateToken]
  )

  return handleUpdateToken
}
