import { useMemo } from 'react'

import { Button, Flex, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Input } from '@/components/form'

import type { EditTokenPageParams, FormValues } from '~wallet/common'
import { tokenFormSchema } from '~wallet/common'
import { useWallet } from '~wallet/hooks'
import type { Token } from '~wallet/types'

import { useRemoveToken, useUpdateToken } from './hooks'
import { ConfirmRemoveTokenPopover } from './partials'

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
  const removeToken = useRemoveToken(selectedToken)

  return (
    <>
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

        <Flex justify="space-between">
          <ConfirmRemoveTokenPopover onConfirm={removeToken} />

          <Button type="submit" variant="primary" w="32">
            Save
          </Button>
        </Flex>
      </Stack>
    </>
  )
}
