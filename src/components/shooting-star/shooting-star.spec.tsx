import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { ShootingStar } from './shooting-star'

describe('<ShootingStar />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ShootingStar />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
