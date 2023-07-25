describe('new tasks (categories) page spec', () => {
  const categories = ['Exercise', 'Cleaning', 'Organization', 'Work', 'Mental Care', 'Health'];

  categories.forEach((category) => {
    const categoryURL = (category.charAt(0).toLowerCase() + category.slice(1)).replace(" ", "")
    it(`should have an h1 of ${category} when at /${categoryURL}`, () => {
      cy.visit(`localhost:3000/${categoryURL}`)
        .get('.new-task-page')
        .contains('h1', category);
    });
  });

  it('should ')
});
