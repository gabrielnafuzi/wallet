import { Container } from '@chakra-ui/react'

import { Logo } from '@/components/logo'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container maxW="container.md" centerContent py="12">
      <Logo />

      {children}
    </Container>
  )
}
