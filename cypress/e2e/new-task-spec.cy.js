describe('new tasks (categories) page spec', () => {
  const categories = ['Exercise', 'Cleaning', 'Organization', 'Work', 'Mental Care', 'Health'];
  beforeEach(() => {
    cy.intercept('GET', `https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/tasks`, {
      statusCode: 200,
      fixture: `testData`,
    }).as('taskFetch');

    cy.intercept('GET', 'https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/savedtasks', {
      statusCode: 200,
      fixture: 'savedTasks',
    }).as('getSavedTasks');
  });
  categories.forEach((category) => {
    const categoryURL = (category.charAt(0).toLowerCase() + category.slice(1)).replace(' ', '');
    it(`should have an h3 of ${category} when at /${categoryURL}`, () => {
      cy.intercept('GET', `https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/tasks/${categoryURL}`, {
        statusCode: 200,
        fixture: `${categoryURL}TestData`,
      }).as('categoryFetch');
      
      cy.visit(`localhost:3000/${categoryURL}`);
      cy.wait('@categoryFetch').get('.new-task-page').contains('h1', category);
    });
  });
  it('should POST a task if the save button is clicked', () => {
    cy.intercept('GET', `https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/tasks/exercise`, {
      statusCode: 200,
      fixture: `exerciseTestData`,
    }).as('exerciseFetch')
    cy.intercept('POST', 'https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/savedtasks', (req) => {
      req.body = {
        task: 'Do 3 push ups.',
        id: 1,
        seen: false,
        category: 'Exercise',
        saved: false,
      };
      req.reply({
        statusCode: 201,
        fixture: 'savedTasks',
      });
    }).as('postRequest');
    
    cy.visit('localhost:3000/exercise');
    cy.wait('@exerciseFetch').get('.save-icon').click();
    cy.get('.task-button').click();
    cy.wait('@postRequest');
    cy.get('tbody tr>td').eq(1).should('contain', 'Do 3 push ups.');
  });
});
