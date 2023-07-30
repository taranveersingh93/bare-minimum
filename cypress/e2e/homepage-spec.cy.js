describe('homepage spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/savedtasks', {
      statusCode: 200,
      body: [],
    }).as('savedTasksGet');
    cy.visit('localhost:3000');
  });
  it('should have a site title at the top', () => {
    cy.wait('@savedTasksGet');
    cy.get('.logo-text').contains('span', 'Bare').get('.logo-text').contains('span', 'Minimum');
  });
  it('should have a link that takes you to your tasks page', () => {
    cy.wait('@savedTasksGet');
    cy.get('.toggle-views').contains('a', 'Task List').click();
    cy.get('thead tr')
      .should('contain', 'Category')
      .and('contain', 'Task')
      .and('contain', 'Actions');
  });
  it('should have a short description about the site', () => {
    cy.wait('@savedTasksGet');
    cy.get('.intro-text').contains("Featherweight tasks for you to embrace the balance between self-care and productivity"
    );
  });
  it('should have instructions about selecting a category', () => {
    cy.wait('@savedTasksGet');
    cy.get('.choose-category-title').contains('Choose a category from the options below');
  });
  describe('categories on homepage leading to their respective pages', () => {
    const categories = {
      exercise: 'Exercise',
      cleaning: 'Cleaning',
      organization: 'Organization',
      work: 'Work',
      mentalCare: 'Mental Care',
      health: 'Health',
    };
    it('should render 6 categories', () => {
      cy.wait('@savedTasksGet');
      Object.entries(categories).forEach(([url, category]) => {
        cy.get(`#${url}`).should('contain', category);
      });
    });
    Object.entries(categories).forEach(([url, category]) => {
      it(`should navigate you to the ${category} page if clicked`, () => {
        cy.wait('@savedTasksGet');
        cy.intercept('GET', `https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/tasks/${url}`, {
          statusCode: 200,
          fixture: `${url}TestData`,
        });
        cy.intercept('GET', `https://bare-minimum-api-53c62eb03bf8.herokuapp.com/api/v1/tasks`, {
          statusCode: 200,
          fixture: 'testData',
        });
        cy.get('.categories').contains('.category', category).click();
        cy.get('.new-task-page').contains('h1', category);
      });
    });
  });
});
