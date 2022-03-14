import { GridItem, Text } from '@chakra-ui/react'

export const TokenListHead = () => {
  return (
    <>
      <GridItem />

      <GridItem>
        <Text fontWeight="bold">Tokens</Text>
      </GridItem>

      <GridItem>
        <Text fontWeight="bold" textAlign="end">
          Balance
        </Text>
      </GridItem>
    </>
  )
}
