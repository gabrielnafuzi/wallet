import { useEffect } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { useMatch } from '@tanstack/react-location'

import { LocationGenerics } from '@/routes/types'

import { EditTokenForm, GoBackHeader, WalletLayout } from '../components'
import { useRedirectIfNoToken } from '../hooks'

export const EditToken = () => {
  const { params } = useMatch<LocationGenerics>()

  const redirectIfNoToken = useRedirectIfNoToken(params.tokenId)

  useEffect(() => {
    redirectIfNoToken()
  }, [redirectIfNoToken])

  return (
    <WalletLayout>
      <Flex justify="center">
        <Box w="full" maxW="md">
          <GoBackHeader title="Edit token" />

          <EditTokenForm />
        </Box>
      </Flex>
    </WalletLayout>
  )
}
