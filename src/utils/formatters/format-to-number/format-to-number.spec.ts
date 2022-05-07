import { formatToNumber } from './format-to-number'

describe('formatToNumber()', () => {
  it('should format a number to a string', () => {
    expect(formatToNumber(123456789)).toBe('123,456,789')

    expect(
      formatToNumber(123456789, { style: 'currency', currency: 'USD' })
    ).toBe('$123,456,789.00')

    expect(
      formatToNumber(123456789, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      })
    ).toBe('$123,456,789.00')

    expect(
      formatToNumber(123456789, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    ).toBe('$123,456,789.00')
  })
})
