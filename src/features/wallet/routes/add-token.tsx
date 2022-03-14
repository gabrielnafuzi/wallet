import { Box, Flex } from '@chakra-ui/react'

import { AddTokenForm, GoBackHeader, WalletLayout } from '../components'

export const AddToken = () => {
  return (
    <WalletLayout>
      <Flex justify="center">
        <Box w="full" maxW="md">
          <GoBackHeader title="Add token" />

          <AddTokenForm />
        </Box>
      </Flex>
    </WalletLayout>
  )
}
