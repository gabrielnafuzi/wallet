import { Flex, Text } from '@chakra-ui/react'

import { ListCustomScrollbar } from '@/components/list'

import { Token } from '~wallet/types'

import { TokenListItem } from './token-list-item'

type TokenListBodyProps = {
  tokens: Token[]
}

export const TokenListBody = ({ tokens }: TokenListBodyProps) => {
  if (!tokens.length) {
    return (
      <Flex align="center" justify="center" mt="28">
        <Text fontSize="xl">No tokens registered yet, add one!</Text>
      </Flex>
    )
  }

  return (
    <ListCustomScrollbar spacing="4" maxH="md" overflowY="auto" mt="2" px="1">
      {tokens?.map((token) => (
        <TokenListItem key={token.id} token={token} />
      ))}
    </ListCustomScrollbar>
  )
}
