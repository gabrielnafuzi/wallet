import { useToast } from '@chakra-ui/react'
import type { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import type { FormValues } from '~wallet/common'
import { useWallet } from '~wallet/hooks'
import { Token } from '~wallet/types'

export const useUpdateToken = (selectedToken: Token) => {
  const toast = useToast()
  const { updateToken } = useWallet()
  const navigate = useNavigate()

  const handleUpdateToken: SubmitHandler<FormValues> = ({ name, balance }) => {
    toast.closeAll()

    try {
      updateToken({
        ...selectedToken,
        name,
        balance,
      })

      toast({
        title: `Token ${name} updated.`,
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

  return handleUpdateToken
}
