import { useRef } from 'react'

import { useNavigate } from '@tanstack/react-location'

import { showToast } from '@/utils/toast'

import { useWallet } from '../hooks'

export const useRedirectIfNoToken = (id?: string) => {
  const { getToken } = useWallet()
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
