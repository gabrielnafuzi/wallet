import { Box } from '@chakra-ui/react'

import { useWalletStore } from '@/stores'

import { TokenListBody, TokenListHead } from './partials'

export const TokenList = () => {
  const tokens = useWalletStore((state) => state.tokens)

  return (
    <Box w="full" pb="4">
      <TokenListHead />

      <TokenListBody tokens={tokens} />
    </Box>
  )
}
