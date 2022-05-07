import { renderWithTheme, screen } from '@/test'

import { ShootingStar } from '.'

describe('<ShootingStar />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ShootingStar />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
