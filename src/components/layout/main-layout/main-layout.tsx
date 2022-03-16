import { Container } from '@chakra-ui/react'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container maxW="container.md" centerContent py="12">
      {children}
    </Container>
  )
}
