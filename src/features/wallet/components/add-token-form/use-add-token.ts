import { useNavigate } from '@tanstack/react-location'
import { nanoid } from 'nanoid'
import type { SubmitHandler } from 'react-hook-form'

import { useWalletStore } from '@/store'
import { showToast } from '@/utils/toast'

import type { FormValues } from '~wallet/common'

export const useAddToken = () => {
  const addToken = useWalletStore((state) => state.addToken)
  const navigate = useNavigate()

  const handleAddToken: SubmitHandler<FormValues> = ({ name, balance }) => {
    try {
      addToken({
        id: nanoid(),
        name,
        balance,
      })

      showToast({
        title: `Token ${name} created.`,
        description: 'Go to home page to see it.',
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
  }

  return handleAddToken
}
