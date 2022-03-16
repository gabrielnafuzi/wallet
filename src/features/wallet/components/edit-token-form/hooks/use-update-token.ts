import { useCallback } from 'react'

import { useToast } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-location'
import type { SubmitHandler } from 'react-hook-form'

import type { FormValues } from '~wallet/common'
import { useWallet } from '~wallet/hooks'
import { Token } from '~wallet/types'

export const useUpdateToken = (selectedToken: Token) => {
  const toast = useToast()
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

        toast({
          title: `Token ${name} updated.`,
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
    },
    [navigate, selectedToken, toast, updateToken]
  )

  return handleUpdateToken
}
