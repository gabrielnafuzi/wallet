import { Grid, GridItem, ListItem, Text } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-location'
import { motion } from 'framer-motion'
import { FaEdit } from 'react-icons/fa'

import type { Token } from '@/stores'
import { formatToNumber } from '@/utils/formatters'

import { itemVariants } from './motion-variants'

type TokenListItemProps = {
  token: Token
}

export const TokenListItem = ({ token }: TokenListItemProps) => {
  const navigate = useNavigate()

  const handleNavigateToEditItem = () => {
    navigate({
      to: `/edit-token/${token.id}`,
    })
  }

  return (
    <ListItem as={motion.li} variants={itemVariants}>
      <Grid templateColumns="10% 45% 45%">
        <GridItem display="flex" alignItems="center" justifyContent="center">
          <FaEdit
            aria-label="Edit token"
            role="button"
            size={20}
            cursor="pointer"
            onClick={handleNavigateToEditItem}
          />
        </GridItem>

        <GridItem>
          <Text fontWeight="bold" fontSize="3xl">
            {token.name}
          </Text>
        </GridItem>

        <GridItem>
          <Text textAlign="end" fontWeight="bold" fontSize="3xl">
            {formatToNumber(token.balance)}
          </Text>
        </GridItem>
      </Grid>
    </ListItem>
  )
}
