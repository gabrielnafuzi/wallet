import { Grid, GridItem, ListItem, Text } from '@chakra-ui/react'
import { FaEdit } from 'react-icons/fa'

import { Token } from '../../../types'

type TokenListItemProps = {
  token: Token
}

export const TokenListItem = ({ token }: TokenListItemProps) => {
  return (
    <ListItem>
      <Grid templateColumns="10% 45% 45%">
        <GridItem display="flex" alignItems="center" justifyContent="center">
          <FaEdit size={20} cursor="pointer" />
        </GridItem>

        <GridItem>
          <Text fontWeight="bold" fontSize="3xl">
            {token.name}
          </Text>
        </GridItem>

        <GridItem>
          <Text textAlign="end" fontWeight="bold" fontSize="3xl">
            {token.balance}
          </Text>
        </GridItem>
      </Grid>
    </ListItem>
  )
}
