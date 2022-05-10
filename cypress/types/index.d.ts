/// <reference types="cypress" />

declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  type Token = {
    name: string
    balance: string
  }

  interface Chainable {
    addToken: (token: Token) => Chainable<Element>
  }
}
