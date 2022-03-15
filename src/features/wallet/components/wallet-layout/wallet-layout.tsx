import { Box, Flex, Image, Text } from '@chakra-ui/react'

import shootingStar from '@/assets/shooting-star.svg'

type WalletLayoutProps = {
  children?: React.ReactNode
  action?: React.ReactNode
}

export const WalletLayout = ({ children, action }: WalletLayoutProps) => {
  return (
    <Box w="full" mt="12" maxW="xl" as="main">
      <Flex justifyContent="space-between" w="full">
        <Flex w="full" align="center" gap="3">
          <Image w="14" src={shootingStar} />

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
