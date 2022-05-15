describe('Can sort the available data', () => {
    beforeEach (() => {
        cy.visit('');
    })
    it('Can sort ascending on the name', () => {
        let personOne = '';
        let personTwo = '';
        cy.get('[data-testid="sortLabel"]').should('contain', 'Sort by Ascending')
        cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > .MuiGrid-grid-xs-8 > :nth-child(1)').then(item => {
            personOne = item[0].textContent;
        })
        cy.get('[data-testid="colleague-grid"]').then(item => {
            if (item[0].childElementCount < 1) {
                throw new Error("No elements to test on")
            }
            cy.get(`:nth-child(${item[0].childElementCount}) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > .MuiGrid-grid-xs-8 > :nth-child(1)`).then(item => {
                personTwo = item[0].textContent;
                if (personOne.toLowerCase() > personTwo.toLowerCase()) {
                    throw new Error("Data was not sorted properly")
                }
            })
        })
    })
    it('Can sort descending on the name', () => {
        let personOne = '';
        let personTwo = '';
        cy.get('[data-testid="sortLabel"]').should('contain', 'Sort by Ascending')
        cy.get('[data-testid="sortSwitch"]').should('exist').click()
        cy.get('[data-testid="sortLabel"]').should('contain', 'Sort by Descending')
        cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > .MuiGrid-grid-xs-8 > :nth-child(1)').then(item => {
            personOne = item[0].textContent;
        })
        cy.get('[data-testid="colleague-grid"]').then(item => {
            if (item[0].childElementCount < 1) {
                throw new Error("No elements to test on")
            }
            cy.get(`:nth-child(${item[0].childElementCount}) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > .MuiGrid-grid-xs-8 > :nth-child(1)`).then(item => {
                personTwo = item[0].textContent;
                if (personOne.toLowerCase() < personTwo.toLowerCase()) {
                    throw new Error("Data was not sorted properly")
                }
            })
        })
    })
    it('Can sort ascending on the office name', () => {
        let officeOne = '';
        let officeTwo = '';
        cy.get('[data-testid="sortLabel"]').should('contain', 'Sort by Ascending')
        cy.customSelect('sortSelect', 'option-office');
        cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > .MuiGrid-grid-xs-8 > :nth-child(2)').then(item => {
            officeOne = item[0].textContent;
        })
        cy.get('[data-testid="colleague-grid"]').then(item => {
            if (item[0].childElementCount < 1) {
                throw new Error("No elements to test on")
            }
            cy.get(`:nth-child(${item[0].childElementCount - 2}) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > .MuiGrid-grid-xs-8 > :nth-child(2)`).then(item => {
                officeTwo = item[0].textContent;
                if (officeOne.split(' ').pop().toLowerCase() > officeTwo.split(' ').pop().toLowerCase()) {
                    throw new Error("Data was not sorted properly")
                }
            })
        })
    })
    it('Can sort descending on the office name', () => {
        let officeOne = '';
        let officeTwo = '';
        cy.get('[data-testid="sortLabel"]').should('contain', 'Sort by Ascending')
        cy.get('[data-testid="sortSwitch"]').should('exist').click()
        cy.get('[data-testid="sortLabel"]').should('contain', 'Sort by Descending')
        cy.customSelect('sortSelect', 'option-office');
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > .MuiGrid-grid-xs-8 > :nth-child(2)').then(item => {
            officeOne = item[0].textContent;
        })
        cy.get('[data-testid="colleague-grid"]').then(item => {
            if (item[0].childElementCount < 1) {
                throw new Error("No elements to test on")
            }
            cy.get(`:nth-child(${item[0].childElementCount - 2}) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > .MuiGrid-grid-xs-8 > :nth-child(2)`).then(item => {
                officeTwo = item[0].textContent;
                if (officeOne.split(' ').pop().toLowerCase() < officeTwo.split(' ').pop().toLowerCase()) {
                    throw new Error("Data was not sorted properly")
                }
            })
        })
    })
})
  