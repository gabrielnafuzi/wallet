import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/test'

import { AnimatedEntry } from '.'

describe('<AnimatedEntry />', () => {
  it('should render children correctly', () => {
    renderWithTheme(
      <AnimatedEntry>
        <span>Hello</span>
      </AnimatedEntry>
    )

    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
