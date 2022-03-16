import { useRef } from 'react'

import { useToast } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-location'

import { useWallet } from '../hooks'

export const useRedirectIfNoToken = (id?: string) => {
  const { getToken } = useWallet()
  const toast = useToast()
  const navigate = useNavigate()

  return useRef(() => {
    const token = getToken(id)

    if (!token) {
      toast({
        title: 'Token not found',
        description: 'The token you are trying to edit does not exist',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })

      navigate({ to: '/' })
    }
  }).current
}
