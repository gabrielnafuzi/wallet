import { Box, Grid } from '@chakra-ui/react'

import { useWallet } from '../../hooks'
import { TokenListBody, TokenListHead } from './partials'

export const TokenList = () => {
  const { tokens } = useWallet()

  return (
    <Box w="full" pb="4">
      <TokenListHead />

      <TokenListBody tokens={tokens} />
    </Box>
  )
}
