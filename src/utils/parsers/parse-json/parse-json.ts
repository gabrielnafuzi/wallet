/**
 * @description A wrapper for "JSON.parse()" to support "undefined" value
 * @param {(string | null)} value - The value to parse - should be a string or null
 */
export const parseJSON = <T>(value: string | null): T | undefined => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch (error) {
    return undefined
  }
}
