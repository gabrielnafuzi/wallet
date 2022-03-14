import { Button, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { nanoid } from 'nanoid'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '@/components/form'

import { useWallet } from '../../hooks'
import { addTokenSchema } from './add-token-schema'

type FormData = {
  token: string
  balance: string
}

export const AddTokenForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(addTokenSchema),
  })

  const { addToken } = useWallet()

  const handleAddToken: SubmitHandler<FormData> = ({ token, balance }) => {
    addToken({
      id: nanoid(),
      token,
      balance,
    })
  }

  return (
    <Stack as="form" spacing="6" onSubmit={handleSubmit(handleAddToken)}>
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
