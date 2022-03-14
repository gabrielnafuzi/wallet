import { Token } from '../../../types'
import { TokenListItem } from './token-list-item'

type TokenListBodyProps = {
  tokens: Token[]
}

export const TokenListBody = ({ tokens }: TokenListBodyProps) => {
  return (
    <>
      {tokens?.map((token) => (
        <TokenListItem key={token.id} token={token} />
      ))}
    </>
  )
}
