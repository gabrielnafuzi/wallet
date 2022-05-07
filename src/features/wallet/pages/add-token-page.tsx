import { Box, Flex } from '@chakra-ui/react'

import { AnimatedEntry } from '@/components/animated'

import { AddTokenForm, GoBackHeader, WalletLayout } from '../components'

export const AddTokenPage = () => {
  return (
    <WalletLayout>
      <Flex justify="center">
        <Box w="full" maxW="md">
          <GoBackHeader title="Add token" />

          <AnimatedEntry>
            <AddTokenForm />
          </AnimatedEntry>
        </Box>
      </Flex>
    </WalletLayout>
  )
}
