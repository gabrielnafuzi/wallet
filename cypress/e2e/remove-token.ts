describe('Remove token', () => {
  it('should remove token correctly', () => {
    cy.addToken({ name: 'BTC', balance: '200' })
    cy.addToken({ name: 'ETH', balance: '300' })
    cy.addToken({ name: 'LTC', balance: '400' })

    cy.findAllByRole('button', { name: /edit token/i })
      .first()
      .click()

    cy.findByRole('button', { name: /remove/i }).click()
    cy.findByRole('button', { name: /confirm/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/BTC/i).should('not.exist')
    cy.findByText(/200/i).should('not.exist')

    cy.findAllByRole('button', { name: /edit token/i }).should('have.length', 2)
  })
})
