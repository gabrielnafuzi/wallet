import { renderWithTheme, screen } from '@/test'

import { FullPageSpinner } from '.'

describe('<FullPageSpinner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<FullPageSpinner />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
