import { Button, Flex, Text } from '@chakra-ui/react'

export const ErrorBoundaryFallback = () => {
  return (
    <Flex w="full" py="60" flexDir="column" align="center">
      <Text color="red.400" fontSize="3xl">
        Ooops, something went wrong :(
      </Text>

      <Button
        colorScheme="whiteAlpha"
        mt="4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </Flex>
  )
}
