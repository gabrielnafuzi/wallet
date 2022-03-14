import { forwardRef, ForwardRefRenderFunction } from 'react'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from '@chakra-ui/react'

export type BaseInputProps = {
  error?: string
  isInvalid?: boolean
  label?: string
  name: string
} & InputProps

export const BaseInput: ForwardRefRenderFunction<
  HTMLInputElement,
  BaseInputProps
> = (
  { name, label, isInvalid = false, error, ...props }: BaseInputProps,
  ref
) => {
  return (
    <FormControl isInvalid={isInvalid}>
      {!!label && (
        <FormLabel htmlFor={name} fontWeight="bold">
          {label}
        </FormLabel>
      )}

      <ChakraInput
        name={name}
        id={name}
        bgColor={isInvalid ? 'red.100' : 'white'}
        color="gray.900"
        borderRadius="6"
        focusBorderColor="brand.primary.default"
        ref={ref}
        {...props}
      />

      {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(BaseInput)
