import { useMemo } from 'react'

import { Button, Flex, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Input } from '@/components/form'

import type { EditTokenPageParams, FormValues } from '../../common'
import { tokenFormSchema } from '../../common'
import { useWallet } from '../../hooks'
import type { Token } from '../../types'
import { ConfirmRemoveTokenPopover } from './partials'
import { useRemoveToken } from './use-remove-token'
import { useUpdateToken } from './use-update-token'

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
