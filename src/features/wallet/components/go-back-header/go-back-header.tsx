import { Button, Flex, Text } from '@chakra-ui/react'
import { useLocation } from '@tanstack/react-location'

import { AnimatedEntry } from '@/components/animated'

type GoBackHeaderProps = {
  title: string
}

export const GoBackHeader = ({ title }: GoBackHeaderProps) => {
  const location = useLocation()

  const handleGoBack = () => {
    location.history.back()
  }

  return (
    <AnimatedEntry
      initial={{ opacity: 0, y: -40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: 'spring', bounce: 0.4 },
      }}
    >
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
    </AnimatedEntry>
  )
}
