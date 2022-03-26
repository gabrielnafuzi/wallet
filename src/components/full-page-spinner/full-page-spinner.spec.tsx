import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { FullPageSpinner } from '.'

describe('<FullPageSpinner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<FullPageSpinner />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
