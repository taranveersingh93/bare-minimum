describe('my tasks page spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/tasklist');
  });
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})