describe('my tasks page spec', () => {
  const categories = ['Exercise', 'Cleaning', 'Organization', 'Work', 'Mental Care', 'Health'];
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/savedtasks', {
      statusCode: 200,
      fixture: 'savedTasks',
    }).as('getSavedTasks');
    cy.visit('localhost:3000/tasklist');
  });

  it('displays a table with appropriate headings', () => {
    cy.get('thead tr')
      .should('contain', 'Category')
      .and('contain', 'Task')
      .and('contain', 'Actions');
  });
  it('should include one of six categories in the table for each task', () => {
    cy.wait('@getSavedTasks').then((interception) => {
      console.log(interception)
      cy.get('tbody tr').each(($row) => {
        cy.wrap($row)
          .find('td:first')
          .invoke('text')
          .then((text) => {
            expect(categories).to.include(text);
          });
      });
    });
  });
});
