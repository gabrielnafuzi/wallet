import { Button, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

type GoBackHeaderProps = {
  title: string
}

export const GoBackHeader = ({ title }: GoBackHeaderProps) => {
  const navigation = useNavigate()

  const handleGoBack = () => {
    navigation(-1)
  }

  return (
    <Flex justify="space-between" align="center" mb="8">
      <Text fontWeight="bold" fontSize="2xl">
        {title}
      </Text>

      <Button
        onClick={handleGoBack}
        bg="brand.gray.default"
        size="sm"
        w="6rem"
        _hover={{ bg: 'brand.gray.darken' }}
        _active={{ bg: 'brand.gray.darken' }}
      >
        Go back
      </Button>
    </Flex>
  )
}
