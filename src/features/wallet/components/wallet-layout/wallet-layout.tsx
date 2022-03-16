import { Box, Flex, Text } from '@chakra-ui/react'

import { ShootingStar } from '@/components/shooting-star/shooting-star'

type WalletLayoutProps = {
  children?: React.ReactNode
  action?: React.ReactNode
}

export const WalletLayout = ({ children, action }: WalletLayoutProps) => {
  return (
    <Box w="full" mt="12" maxW="xl" as="main">
      <Flex
        justifyContent="space-between"
        w="full"
        position="sticky"
        top="0"
        bg="brand.bg"
        py="2"
        zIndex="4"
      >
        <Flex w="full" align="center" gap="3">
          <Box w="16">
            <ShootingStar />
          </Box>

          <Text fontSize="3xl" fontWeight="bold" as="h1">
            Wish Wallet
          </Text>
        </Flex>

        {!!action && <Flex align="center">{action}</Flex>}
      </Flex>

      <Box mt="14" as="section">
        {children}
      </Box>
    </Box>
  )
}
