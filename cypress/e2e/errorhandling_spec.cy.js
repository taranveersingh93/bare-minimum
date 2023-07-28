describe('Error handling for wrong pages', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/savedtasks`, {
      statusCode: 404,
    }).as('pageNotFound');
  });
  it('Should show an error on page when user navigates to any other wrong page', () => {
    cy.visit('localhost:3000/bear/bear')
    .wait('@pageNotFound')
    .get('.error-bear').should('exist')
  })
})

describe('500 Error', () => {
  it('Should show an error on page when server is down', () => {
  cy.intercept('GET', 'https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/savedtasks', {
    statusCode: 500,
  }).as('serverDown');
  cy.visit('localhost:3000')
  .wait('@serverDown')
  .get('.error-bear').should('exist')
})
})

describe('Error handling for categories', () => {
  const categories = ['Exercise', 'Cleaning', 'Organization', 'Work', 'Mental Care', 'Health'];

  categories.forEach((category) => {
    it(`Should show Loading error on ${category} page if fetch fails`, () => {
      const categoryURL = (category.charAt(0).toLowerCase() + category.slice(1)).replace(' ', '');
      cy.intercept(`https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/tasks/${categoryURL}`, {
        statusCode: 404,
        body: '404 Not Found!',
        headers: { 'content-type': 'application/json' },
      }).as(`failed${categoryURL}request`);
      cy.visit(`localhost:3000/${categoryURL}`)
      cy.wait(`@failed${categoryURL}request`).get('.task-card').contains('h1', 'Loading...');
    });
  });
});