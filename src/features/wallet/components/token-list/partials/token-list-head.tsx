import { Grid, GridItem, Text } from '@chakra-ui/react'

export const TokenListHead = () => {
  return (
    <Grid templateColumns="10% 45% 45%" px="1">
      <GridItem />

      <GridItem>
        <Text fontWeight="bold">Tokens</Text>
      </GridItem>

      <GridItem>
        <Text fontWeight="bold" textAlign="end">
          Balance
        </Text>
      </GridItem>
    </Grid>
  )
}
