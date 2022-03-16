import { useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import type { FormValues } from '../../common'
import { useWallet } from '../../hooks'

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

      navigate('/')
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
