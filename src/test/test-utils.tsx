import { ChakraProvider } from '@chakra-ui/react'
import { render as rtlRender, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { theme } from '@/styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return rtlRender(<ChakraProvider theme={theme}>{children}</ChakraProvider>)
}

export * from '@testing-library/react'
export { userEvent, rtlRender }
