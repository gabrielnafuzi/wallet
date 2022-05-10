describe('Edit token', () => {
  it('should edit token correctly', () => {
    cy.addToken({ name: 'BTC', balance: '200' })

    cy.findByRole('button', {
      name: /edit token/i,
    }).click()

    cy.url().should('include', `${Cypress.config().baseUrl}/edit-token/`)
    cy.focused().clear().type('New token name')

    cy.findByPlaceholderText(/enter token balance/i)
      .clear()
      .type('1000')

    cy.findByRole('button', { name: /save/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    cy.findByText(/new token name/i).should('exist')
    cy.findByText(/1,000/i).should('exist')
    cy.findByText(/BTC/i).should('not.exist')
    cy.findByText(/200/i).should('not.exist')
  })
})
