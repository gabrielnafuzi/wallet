import { Flex, List, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import type { Token } from '@/stores'

import { listVariants } from './motion-variants'
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
    <AnimatePresence>
      <List
        spacing="4"
        mt="2"
        px="1"
        as={motion.ul}
        variants={listVariants}
        initial="hidden"
        animate="show"
      >
        {tokens?.map((token) => (
          <TokenListItem key={token.id} token={token} />
        ))}
      </List>
    </AnimatePresence>
  )
}
