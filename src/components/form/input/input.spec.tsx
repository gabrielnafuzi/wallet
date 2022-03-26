import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  it('should changes its value when typing', async () => {
    const onChange = jest.fn()

    renderWithTheme(
      <Input
        name="with-onchange"
        onChange={(event) => onChange(event.target.value)}
        label="label"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'text to be typed'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onChange).toHaveBeenCalledTimes(text.length)
      expect(onChange).toHaveBeenLastCalledWith(text)
    })
  })
})
