describe('homepage spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });
  it('should have a site title at the top', () => {
    cy.get('.logo-text').contains('span', 'Bare')
    .get('.logo-text').contains('span', 'Minimum');
  });
  it('should have a link that takes you to your tasks page', () => {
    cy.get('.toggle-views')
      .contains('a', 'Task List')
      .click()
      .get('thead tr')
      .should('contain', 'Category')
      .and('contain', 'Task')
      .and('contain', 'Actions');
  });
  it('should have a short description about the site', () => {
    cy.get('.intro-text').contains(
      'p',
      `"Featherweight tasks for you to embrace the balance between self-care and productivity"`
    );
  });
  it('should have instructions about selecting a category', () => {
    cy.get('.choose-category-title').contains('h1', 'Choose a category from the options below');
  });
  it('should render 6 categories', () => {
    cy.get('.categories .category')
      .should('contain', 'Exercise')
      .and('contain', 'Cleaning')
      .and('contain', 'Organization')
      .and('contain', 'Work')
      .and('contain', 'Mental Care')
      .and('contain', 'Health');

      const categories = cy.get('.categories .category')
      for (const category of ['Exercise', 'Cleaning']) {
        categories.should('contain', category)
      }
  });
  it('should navigate you to the Exercise page if clicked', () => {
    cy.get('.categories')
      .contains('.category', 'Exercise')
      .click()
      .get('.new-task-page')
      .contains('h1', 'Exercise');
  });
});
