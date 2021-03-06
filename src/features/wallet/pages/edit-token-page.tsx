import { useEffect } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { useMatch } from '@tanstack/react-location'

import { AnimatedEntry } from '@/components/animated'

import { EditTokenForm, GoBackHeader, WalletLayout } from '../components'
import { useRedirectIfNoToken } from '../hooks'
import type { EditTokenPageGenerics } from '../routes'

export const EditTokenPage = () => {
  const { params } = useMatch<EditTokenPageGenerics>()

  const redirectIfNoToken = useRedirectIfNoToken(params.tokenId)

  useEffect(() => {
    redirectIfNoToken()
  }, [redirectIfNoToken])

  return (
    <WalletLayout>
      <Flex justify="center">
        <Box w="full" maxW="md">
          <GoBackHeader title="Edit token" />

          <AnimatedEntry>
            <EditTokenForm />
          </AnimatedEntry>
        </Box>
      </Flex>
    </WalletLayout>
  )
}
