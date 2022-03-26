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

  it('should return an error when trying to add a token and name already exists', () => {
    const { result } = renderHook(() => useWalletStore())
    const token = makeToken()

    act(() => {
      result.current.addToken(token)
    })

    const newToken = makeToken()
    let error: string | null = null

    act(() => {
      error = result.current.addToken(newToken).error
    })

    expect(error).toBe('Token with this name already exists')
  })

  it('should return an error when trying to update a token and name already exists', () => {
    const { result } = renderHook(() => useWalletStore())
    const token = makeToken()

    const otherToken: Token = {
      balance: '100',
      id: 'other_token_id',
      name: 'other_token_name',
    }

    act(() => {
      result.current.addToken(token)
      result.current.addToken(otherToken)
    })

    let error: string | null = null

    act(() => {
      error = result.current.updateToken({
        ...token,
        name: otherToken.name,
      }).error
    })

    expect(error).toBe('Token with this name already exists')
  })
})
