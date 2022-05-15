describe('Can change between different views', () => {
    beforeEach (() => {
        cy.visit('');
    })
    it('Can change to a list view and back again', () => {
        cy.get('[data-testid="viewOptionLabel"]').should('contain', 'Select View Option');
        cy.get('[data-testid="viewOptionSelect"]').should('contain', 'grid');
        cy.customSelect('viewOptionSelect', 'option-list');
        cy.get('[data-testid="viewOptionSelect"]').should('contain', 'list');
        cy.wait(2500);
        cy.customSelect('viewOptionSelect', 'option-grid');
        cy.get('[data-testid="viewOptionSelect"]').should('contain', 'grid');
    })
  })
  