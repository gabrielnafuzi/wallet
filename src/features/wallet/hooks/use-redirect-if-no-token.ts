import { useRef } from 'react'

import { useNavigate } from '@tanstack/react-location'

import { useWalletStore } from '@/store'
import { showToast } from '@/utils/toast'

export const useRedirectIfNoToken = (id?: string) => {
  const getToken = useWalletStore((state) => state.getToken)
  const navigate = useNavigate()

  return useRef(() => {
    const token = getToken(id)

    if (!token) {
      showToast({
        title: 'Token not found',
        description: 'The token you are trying to edit does not exist',
        status: 'error',
      })

      navigate({ to: '/' })
    }
  }).current
}
