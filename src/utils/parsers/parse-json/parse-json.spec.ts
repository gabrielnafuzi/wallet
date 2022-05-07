import { parseJSON } from './parse-json'

describe('parseJSON()', () => {
  it('should parse a string to a JSON object', () => {
    expect(parseJSON('{"a":1,"b":2}')).toEqual({ a: 1, b: 2 })

    expect(parseJSON('[{"a":1,"b":2},{"a":3,"b":4}]')).toEqual([
      { a: 1, b: 2 },
      { a: 3, b: 4 },
    ])
  })

  it('should return undefined if the value is not a valid json string', () => {
    expect(parseJSON(null)).toBeUndefined()
    expect(parseJSON('undefined')).toBeUndefined()
    expect(parseJSON('{a:1}')).toBeUndefined()
  })
})
