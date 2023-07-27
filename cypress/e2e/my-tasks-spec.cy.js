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
    cy.wait('@getSavedTasks');
    cy.get('thead tr')
      .should('contain', 'Category')
      .and('contain', 'Task')
      .and('contain', 'Actions');
  });
  it('should include one of six categories in the table for each task', (done) => {
    cy.wait('@getSavedTasks');
    cy.get('tbody tr').each(($row) => {
      cy.wrap($row)
        .find('td:first')
        .invoke('text')
        .then((text) => {
          expect(categories).to.include(text);
        })
        .then(() => {
          done();
        });
    });
  });
  it('should mark a task as complete', () => {
    cy.wait('@getSavedTasks');
    cy.intercept('PATCH', 'http://localhost:3001/api/v1/savedtasks/1', (req) => {
      req.body = {
        completed: 'true',
      };
      req.reply({
        statusCode: 201,
        body: [
          {
            id: 1,
            category: 'Exercise',
            task: 'Do 3 push ups.',
            completed: 'true',
          },
        ],
      });
    });
    cy.wait('@getSavedTasks').then(() => {
      cy.get('.check-task').click();
      cy.get('.check-task').should('have.class', 'checked');
    });
  });
  it('should delete a task when the trash is clicked', () => {
    cy.wait('@getSavedTasks');
    cy.intercept('DELETE', 'http://localhost:3001/api/v1/savedtasks/1', {
      statusCode: 201,
      body: [],
    });
    cy.wait('@getSavedTasks').then(() => {
      cy.get('.bin').click();
      cy.get('tbody tr').contains('td', 'Save a task to view it here!');
    });
  });
});
