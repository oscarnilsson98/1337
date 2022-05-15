let colleagueNames =  {};
let officeNames =  {};
describe('Can filter the available data', () => {
    beforeEach (() => {
        cy.visit('');
        cy.fixture('filter-colleague-names').then((names) => {
            colleagueNames = names;
        });
        cy.fixture('filter-office-names').then((names) => {
            officeNames = names;
        });
    })
    it('Can filter on the name', () => {
        cy.get('[data-testid="filterLabel"]').should('contain', 'Filter by')
        cy.contains(colleagueNames.personOne).should('exist');
        cy.contains(colleagueNames.personTwo).should('exist');
        cy.get('[data-testid="filterSelect"]').should('contain', 'name')
        cy.get('[data-testid="filterInput"]').type(colleagueNames.personTwo);
        cy.contains(colleagueNames.personOne).should('not.exist');
        cy.contains(colleagueNames.personTwo).should('exist');
    })
    it('Can filter on the office', () => {
        cy.get('[data-testid="filterLabel"]').should('contain', 'Filter by')
        cy.contains(officeNames.officeOne).should('exist');
        cy.contains(officeNames.officeTwo).should('exist');
        cy.get('[data-testid="filterSelect"]').should('contain', 'name')
        cy.customSelect('filterSelect', 'option-office');
        cy.get('[data-testid="filterSelect"]').should('contain', 'office')
        cy.get('[data-testid="filterInput"]').type(officeNames.officeTwo);
        cy.contains(officeNames.officeOne).should('not.exist');
        cy.contains(officeNames.officeTwo).should('exist');
    })
})
  