describe('app-global', () => {
  beforeEach(() => cy.visit('/'))

  it('should load home page', () => {
    cy.get('h1').contains('Dream On: Brazil 2022')
  })
})
