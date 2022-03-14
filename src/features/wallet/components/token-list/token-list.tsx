import { Box, Grid } from '@chakra-ui/react'

import { useWallet } from '../../hooks'
import { TokenListBody, TokenListHead } from './partials'

export const TokenList = () => {
  const { tokens } = useWallet()

  return (
    <Box w="full">
      <Grid templateColumns="10% 45% 45%">
        <TokenListHead />
        <TokenListBody tokens={tokens} />
      </Grid>
    </Box>
  )
}
