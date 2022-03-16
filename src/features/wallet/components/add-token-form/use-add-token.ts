import { useToast } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-location'
import { nanoid } from 'nanoid'
import type { SubmitHandler } from 'react-hook-form'

import type { FormValues } from '~wallet/common'
import { useWallet } from '~wallet/hooks'

export const useAddToken = () => {
  const toast = useToast()
  const { addToken } = useWallet()
  const navigate = useNavigate()

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
        duration: 3000,
        isClosable: true,
        position: 'top',
      })

      navigate({ to: '/' })
    } catch (error) {
      const title = (error as Error).message ?? 'Something went wrong'

      toast({
        title,
        description: 'Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  return handleAddToken
}
