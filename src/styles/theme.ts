import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      primary: {
        default: '#AA33B5',
        darken: '#8A1F9D',
      },
      bg: '#14152C',
      gray: {
        default: '#656565',
        darken: '#3D3D3D',
      },
      red: {
        default: '#930000',
        darken: '#6B0000',
      },
      yellow: '#CAD738',
      purple: '#7476a2',
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'brand.primary.default',
          _hover: { bg: 'brand.primary.darken' },
          _active: { bg: 'brand.primary.darken' },
        },
        danger: {
          bg: 'brand.red.default',
          _hover: { bg: 'brand.red.darken' },
          _active: { bg: 'brand.red.darken' },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.bg',
        color: 'white',
      },
    },
  },
})
