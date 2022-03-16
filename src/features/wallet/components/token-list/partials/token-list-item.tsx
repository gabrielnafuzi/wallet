import { Grid, GridItem, ListItem, Text } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-location'
import { FaEdit } from 'react-icons/fa'

import { Token } from '~wallet/types'

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
    <ListItem>
      <Grid templateColumns="10% 45% 45%">
        <GridItem display="flex" alignItems="center" justifyContent="center">
          <FaEdit
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
            {token.balance}
          </Text>
        </GridItem>
      </Grid>
    </ListItem>
  )
}
