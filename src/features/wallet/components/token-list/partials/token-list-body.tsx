import { List } from '@chakra-ui/react'

import { Token } from '../../../types'
import { TokenListItem } from './token-list-item'

type TokenListBodyProps = {
  tokens: Token[]
}

export const TokenListBody = ({ tokens }: TokenListBodyProps) => {
  return (
    <List
      spacing="4"
      maxH="md"
      overflowY="auto"
      mt="2"
      px="1"
      __css={{
        '&::-webkit-scrollbar': {
          width: '5px',
          height: '5px',
        },
        '&::-webkit-scrollbar-corner': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '4px',
          backgroundColor: 'brand.purple',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
      }}
    >
      {tokens?.map((token) => (
        <TokenListItem key={token.id} token={token} />
      ))}
    </List>
  )
}
