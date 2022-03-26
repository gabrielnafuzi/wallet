import { act, renderHook } from '@testing-library/react-hooks'

import type { Token } from './types'
import { useWalletStore } from './wallet-store'

const makeToken = (): Token => ({
  id: 'token_id',
  name: 'token_name',
  balance: '0',
})

describe('WalletStore', () => {
  it('should add a token', () => {
    const { result } = renderHook(() => useWalletStore())

    expect(result.current.tokens.length).toBe(0)

    act(() => {
      result.current.addToken(makeToken())
    })

    expect(result.current.tokens.length).toBe(1)
  })

  it('should remove a token', () => {
    const { result } = renderHook(() => useWalletStore())

    expect(result.current.tokens.length).toBe(0)

    const token = makeToken()

    act(() => {
      result.current.addToken(token)
      result.current.removeToken(token.id)
    })

    expect(result.current.tokens.length).toBe(0)
  })

  it('should update a token', () => {
    const { result } = renderHook(() => useWalletStore())

    expect(result.current.tokens.length).toBe(0)

    const token = makeToken()

    act(() => {
      result.current.addToken(token)
      result.current.updateToken({ ...token, balance: '200' })
    })

    expect(result.current.tokens[0].balance).toBe('200')
  })

  it('should return a token when id is passed and has a token with same id', () => {
    const { result } = renderHook(() => useWalletStore())

    expect(result.current.tokens.length).toBe(0)

    const token = makeToken()

    act(() => {
      result.current.addToken(token)
    })

    expect(result.current.getToken(token.id)).toEqual(token)
  })

  it('should return null when id is not passed or not found', () => {
    const { result } = renderHook(() => useWalletStore())

    expect(result.current.tokens.length).toBe(0)

    const token = makeToken()

    act(() => {
      result.current.addToken(token)
    })

    expect(result.current.getToken()).toBeNull()
    expect(result.current.getToken('invalid_id')).toBeNull()
  })
})
