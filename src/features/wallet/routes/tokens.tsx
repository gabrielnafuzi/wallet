import { Button } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-location'

import { TokenList, WalletLayout } from '../components'

export const Tokens = () => {
  const navigate = useNavigate()

  const handleNavigateToAddToken = () => {
    navigate({
      to: '/add-token',
    })
  }

  return (
    <WalletLayout
      headerSticky
      action={
        <Button onClick={handleNavigateToAddToken} variant="primary">
          Add token
        </Button>
      }
    >
      <TokenList />
    </WalletLayout>
  )
}
