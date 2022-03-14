import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { TokenList, WalletLayout } from '../components'

export const Tokens = () => {
  const navigate = useNavigate()

  const handleNavigateToAddToken = () => {
    navigate('/add-token')
  }

  return (
    <WalletLayout
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
