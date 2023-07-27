describe('homepage spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });
  it('should have a site title at the top', () => {
    cy.get('.logo-text').contains('span', 'Bare').get('.logo-text').contains('span', 'Minimum');
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
  describe('categories on homepage leading to their respective pages', () => {
    const categories = ['Exercise', 'Cleaning', 'Organization', 'Work', 'Mental Care', 'Health'];
    it('should render 6 categories', () => {
      const cypressCategories = cy.get('.categories .category');
      categories.forEach((cat) => {
        cypressCategories.should('contain', cat);
      });
    });
    categories.forEach((category) => {
      it(`should navigate you to the ${category} page if clicked`, () => {
        cy.get('.categories')
          .contains('.category', category)
          .click()
          .get('.new-task-page')
          .contains('h1', category);
      });
    });
  });
});
