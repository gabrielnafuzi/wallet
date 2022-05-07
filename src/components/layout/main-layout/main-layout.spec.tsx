import { screen, renderWithTheme } from '@/test'

import { MainLayout } from '.'

jest.mock('@/utils/toast', () => ({
  __esModule: true,
  toast: jest.fn(),
}))

describe('<MainLayout />', () => {
  it('should render children correctly', () => {
    renderWithTheme(
      <MainLayout>
        <span>Hello</span>
      </MainLayout>
    )

    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
