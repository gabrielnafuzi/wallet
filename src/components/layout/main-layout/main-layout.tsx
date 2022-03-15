import { Container } from '@chakra-ui/react'

import { Logo } from '@/components/logo'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container
      maxW="container.md"
      centerContent
      py="12"
      maxH="100vh"
      overflow="hidden"
    >
      <header>
        <Logo />
      </header>

      {children}
    </Container>
  )
}
