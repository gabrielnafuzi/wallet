import { Button, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/form'

import { tokenFormSchema, type FormValues } from '~wallet/common'

import { useAddToken } from './use-add-token'

export const AddTokenForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(tokenFormSchema),
  })

  const addToken = useAddToken()

  return (
    <Stack as="form" spacing="6" onSubmit={handleSubmit(addToken)}>
      <Input
        label="Token"
        {...register('name')}
        isInvalid={!!errors.name}
        error={errors.name?.message}
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
