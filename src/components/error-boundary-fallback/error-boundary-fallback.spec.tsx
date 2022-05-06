import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { ErrorBoundaryFallback } from '.'

describe('<ErrorBoundaryFallback />', () => {
  it('should call location.assign with location.origin when refresh button is clicked', () => {
    const assignSpy = jest.fn()

    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        assign: assignSpy,
        origin: 'https://example.com',
      },
    })

    renderWithTheme(<ErrorBoundaryFallback />)

    const refreshButton = screen.getByRole('button')

    fireEvent.click(refreshButton)

    expect(assignSpy).toHaveBeenCalledWith('https://example.com')
  })
})
