import { List, ListProps } from '@chakra-ui/react'

export const ListCustomScrollbar = (props: ListProps) => {
  return (
    <List
      __css={{
        '&::-webkit-scrollbar': {
          width: '5px',
          height: '5px',
        },
        '&::-webkit-scrollbar-corner': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '4px',
          backgroundColor: 'brand.purple',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
      }}
      {...props}
    />
  )
}
