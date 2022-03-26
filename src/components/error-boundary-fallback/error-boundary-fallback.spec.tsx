import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from '@/utils/tests'

import { ErrorBoundaryFallback } from '.'

describe('<ErrorBoundaryFallback />', () => {
  it('should call location.assign with location.origin when refresh button is clicked', () => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { assign: jest.fn(), origin: 'https://example.com' },
    })

    renderWithTheme(<ErrorBoundaryFallback />)

    const refreshButton = screen.getByRole('button')

    userEvent.click(refreshButton)

    expect(window.location.assign).toHaveBeenCalledWith('https://example.com')
  })
})
