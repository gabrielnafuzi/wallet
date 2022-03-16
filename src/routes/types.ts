import { MakeGenerics } from '@tanstack/react-location'

export type LocationGenerics = MakeGenerics<{
  Params: {
    tokenId: string
  }
}>
