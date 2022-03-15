import { useCallback } from 'react'

import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { useWallet } from '../hooks'

export const useRedirectIfNoToken = (id?: string) => {
  const { getToken } = useWallet()
  const toast = useToast()
  const navigate = useNavigate()

  return useCallback(() => {
    const token = getToken(id)

    if (!token) {
      toast({
        title: 'Token not found',
        description: 'The token you are trying to edit does not exist',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })

      navigate('/')
    }
  }, [getToken, id, navigate, toast])
}
