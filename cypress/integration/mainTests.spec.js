describe('kanban tests', () => {
  it('Phase 1', () => {
    cy.fixture('testData').then((data) => {
      cy.log('Entering application');
      cy.visit(data.main_url);
      // eslint-disable-next-line no-unused-vars
      cy.get('button[class="button_grey"]').each(($el, index, $list) => {
        cy.wrap($el).click();
      });
      cy.get('textarea[class="form_textbox"]').last().should('have.focus');
    });
  });
});
