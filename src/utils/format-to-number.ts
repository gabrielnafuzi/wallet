export const formatToNumber = (
  value: string | number,
  options?: Intl.NumberFormatOptions
): string => {
  const asNumber = Number(value)

  return new Intl.NumberFormat('en-US', options).format(asNumber)
}
