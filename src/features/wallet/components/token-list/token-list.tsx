import { Box } from '@chakra-ui/react'

import { useStore } from '@/store'

import { TokenListBody, TokenListHead } from './partials'

export const TokenList = () => {
  const tokens = useStore((state) => state.tokens)

  return (
    <Box w="full" pb="4">
      <TokenListHead />

      <TokenListBody tokens={tokens} />
    </Box>
  )
}
