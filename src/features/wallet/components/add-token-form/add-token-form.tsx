import { Button, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/form'

import { addTokenSchema } from './add-token-schema'
import type { FormValues } from './types'
import { useAddToken } from './use-add-token'

export const AddTokenForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(addTokenSchema),
  })

  const addToken = useAddToken(reset)

  return (
    <Stack as="form" spacing="6" onSubmit={handleSubmit(addToken)}>
      <Input
        label="Token"
        {...register('token')}
        isInvalid={!!errors.token}
        error={errors.token?.message}
      />
      <Input
        label="Balance"
        {...register('balance')}
        isInvalid={!!errors.balance}
        error={errors.balance?.message}
      />

      <Button type="submit" variant="primary" alignSelf="end" w="32">
        Save
      </Button>
    </Stack>
  )
}
