import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests'

import { Input } from '.'

describe('<Input />', () => {
  it('should render with label', () => {
    renderWithTheme(<Input name="field" label="field" />)

    expect(screen.queryByLabelText('field')).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<Input name="field" />)

    expect(screen.queryByLabelText('field')).not.toBeInTheDocument()
  })
})
