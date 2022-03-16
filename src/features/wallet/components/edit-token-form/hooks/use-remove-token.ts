import { useCallback } from 'react'

import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { useWallet } from '../../../hooks'
import { Token } from '../../../types'

export const useRemoveToken = (token: Token) => {
  const { removeToken } = useWallet()
  const toast = useToast()
  const navigate = useNavigate()

  const handleRemoveToken = useCallback(() => {
    try {
      removeToken(token.id)

      toast({
        title: `Token ${token.name} removed.`,
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
  }, [navigate, removeToken, toast, token.id, token.name])

  return handleRemoveToken
}
