import { useMemo } from 'react'

import { Button, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Input } from '@/components/form'

import { tokenFormSchema } from '../../common'
import type { FormValues, EditTokenPageParams } from '../../common'
import { useWallet } from '../../hooks'
import type { Token } from '../../types'
import { useUpdateToken } from './edit-add-token'

export const EditTokenForm = () => {
  const params = useParams<EditTokenPageParams>()
  const { getToken } = useWallet()

  const selectedToken = useMemo(
    () => getToken(params.id) as Token,
    [getToken, params.id]
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(tokenFormSchema),
    defaultValues: {
      ...(selectedToken ?? {}),
    },
  })

  const updateToken = useUpdateToken(selectedToken)

  return (
    <Stack as="form" spacing="6" onSubmit={handleSubmit(updateToken)}>
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
