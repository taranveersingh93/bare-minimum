describe('Error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/savedtasks', {
      statusCode: 200,
      body: [],
    }).as('getSavedTasks');
    cy.intercept('GET', `https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/tasks/bear`, {
      statusCode: 404,
    }).as('pageNotFound');
    cy.intercept('GET', `https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/tasks`, {
      statusCode: 200,
    }).as('getTask');
  });
  it('Should show an error on page when user navigates to incorrect category', () => {
    cy.visit('localhost:3000/bear')
    .wait(['@getSavedTasks', '@pageNotFound', '@getTask'])
    .get('h1').should('have.text', 'Loading...')
    .get('.error-message').contains('We apologize! Error: Not Found. Please try again later.')
  })
  it('Should show a 404 error on page when user navigates to any other wrong page', () => {
    cy.visit('localhost:3000/bear/bear')
    .wait('@getSavedTasks')
    .get('.error-bear').should('exist')
  })
})