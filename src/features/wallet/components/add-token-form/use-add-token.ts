import { useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { SubmitHandler } from 'react-hook-form'

import type { FormValues } from '../../common'
import { useWallet } from '../../hooks'

export const useAddToken = (resetFn: () => void) => {
  const toast = useToast()
  const { addToken } = useWallet()

  const handleAddToken: SubmitHandler<FormValues> = ({ name, balance }) => {
    toast.closeAll()

    try {
      addToken({
        id: nanoid(),
        name,
        balance,
      })

      toast({
        title: `Token ${name} created.`,
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
