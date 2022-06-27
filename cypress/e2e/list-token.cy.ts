describe('List token', () => {
  it('should list tokens correctly', () => {
    cy.addToken({ name: 'token 1', balance: '200' })
    cy.addToken({ name: 'token 2', balance: '300' })
    cy.addToken({ name: 'token 3', balance: '400' })

    cy.findAllByRole('button', { name: /edit token/i }).should('have.length', 3)
    cy.findByText(/token 1/i).should('exist')
    cy.findByText(/token 2/i).should('exist')
    cy.findByText(/token 3/i).should('exist')
    cy.findByText(/200/i).should('exist')
    cy.findByText(/300/i).should('exist')
    cy.findByText(/400/i).should('exist')

    cy.reload()
  })
})
