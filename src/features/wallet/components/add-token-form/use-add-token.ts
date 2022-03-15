import { useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { SubmitHandler } from 'react-hook-form'

import { useWallet } from '../../hooks'
import type { FormValues } from './types'

export const useAddToken = (resetFn: () => void) => {
  const toast = useToast()
  const { addToken } = useWallet()

  const handleAddToken: SubmitHandler<FormValues> = ({ token, balance }) => {
    toast.closeAll()

    try {
      addToken({
        id: nanoid(),
        token,
        balance,
      })

      toast({
        title: `Token ${token} created.`,
        description: 'Go to home page to see it.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })

      resetFn()
    } catch (error) {
      const title = (error as Error).message ?? 'Something went wrong'

      toast({
        title,
        description: 'Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  return handleAddToken
}
