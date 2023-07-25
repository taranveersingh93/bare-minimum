describe('homepage spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });
  it('should have a site title at the top', () => {
    cy.get('.logo-text').contains('span', 'Bare');
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
    cy.get('.categories').contains('.category', 'Exercise')
    .get('.categories').contains('.category', 'Cleaning')
    .get('.categories').contains('.category', 'Organization')
    .get('.categories').contains('.category', 'Work')
    .get('.categories').contains('.category', 'Mental Care')
    .get('.categories').contains('.category', 'Health');
  });
});
