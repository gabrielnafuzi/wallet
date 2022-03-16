import { Flex, List, Text } from '@chakra-ui/react'

import { Token } from '~wallet/types'

import { TokenListItem } from './token-list-item'

type TokenListBodyProps = {
  tokens: Token[]
}

export const TokenListBody = ({ tokens }: TokenListBodyProps) => {
  if (!tokens?.length) {
    return (
      <Flex align="center" justify="center" mt="28">
        <Text fontSize="xl">No tokens registered yet, add one!</Text>
      </Flex>
    )
  }

  return (
    <List spacing="4" mt="2" px="1">
      {tokens?.map((token) => (
        <TokenListItem key={token.id} token={token} />
      ))}
    </List>
  )
}
