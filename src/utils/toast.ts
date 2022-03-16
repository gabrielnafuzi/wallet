import { createStandaloneToast, UseToastOptions } from '@chakra-ui/react'

import { theme } from '@/styles/theme'

const toast = createStandaloneToast({ theme })

export const showToast = ({ title, ...options }: UseToastOptions) => {
  const {
    duration = 3000,
    isClosable = true,
    position = 'top-right',
  } = options ?? {}

  toast({
    title,
    duration,
    isClosable,
    position,
    ...options,
  })
}
