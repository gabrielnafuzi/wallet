import { ChakraProvider } from '@chakra-ui/react'
import { render, RenderResult } from '@testing-library/react'

import { theme } from '@/styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ChakraProvider theme={theme}>{children}</ChakraProvider>)
}
