import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { MainLayout } from '.'

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
