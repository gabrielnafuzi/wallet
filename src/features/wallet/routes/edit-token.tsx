import { useEffect } from 'react'

import { Box, Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import type { EditTokenPageParams } from '../common'
import { EditTokenForm, GoBackHeader, WalletLayout } from '../components'
import { useRedirectIfNoToken } from '../hooks'

export const EditToken = () => {
  const params = useParams<EditTokenPageParams>()
  const redirectIfNoToken = useRedirectIfNoToken(params.id)

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
