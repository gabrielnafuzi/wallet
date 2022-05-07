import { useMemo } from 'react'

import { Button, Flex, Stack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMatch } from '@tanstack/react-location'
import { useForm } from 'react-hook-form'

import { Input } from '@/components/form'
import { LocationGenerics } from '@/routes/types'
import { useWalletStore } from '@/stores'
import type { Token } from '@/stores'

import type { FormValues } from '~wallet/common'
import { tokenFormSchema } from '~wallet/common'

import { useRemoveToken, useUpdateToken } from './hooks'
import { ConfirmRemoveTokenPopover } from './partials'

export const EditTokenForm = () => {
  const { params } = useMatch<LocationGenerics>()
  const getToken = useWalletStore((state) => state.getToken)

  const selectedToken = useMemo(
    () => getToken(params.tokenId) as Token,
    [getToken, params.tokenId]
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
    <Stack as="form" spacing="6" onSubmit={handleSubmit(updateToken)}>
      <Input
        label="Token"
        {...register('name')}
        isInvalid={!!errors.name}
        error={errors.name?.message}
        autoFocus
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
  )
}
