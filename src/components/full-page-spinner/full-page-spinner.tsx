import { Flex, Spinner } from '@chakra-ui/react'

export const FullPageSpinner = () => {
  return (
    <Flex w="full" py="40" justify="center" align="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="whiteAlpha.200"
        color="brand.primary.default"
        size="xl"
        role="status"
      />
    </Flex>
  )
}
