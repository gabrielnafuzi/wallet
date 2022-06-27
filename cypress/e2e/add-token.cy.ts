describe('AddToken', () => {
  it('should add token', () => {
    cy.addToken({ name: 'BTC', balance: '200' })

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.findByText(/btc/i).should('exist')
    cy.findByText(/200/i).should('exist')
  })
})
