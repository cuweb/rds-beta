describe('Search Form', () => {
    it(`Search Form: Should render form`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--base`
        )
        cy.get(`form`).should('exist')
    })

    it(`Search Form: Should render c-searchform`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--base`
        )
        cy.get(`.c-searchform`).should('exist')
    })

    it(`Search Form: Should render label`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--base`
        )
        cy.get(`label`).should('exist')
    })

    it(`Search Form: Should render input`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--base`
        )
        cy.get(`input`).should('exist')
    })

    it(`Search Form: Should render button`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--base`
        )
        cy.get(`button`).should('exist')
    })

    it(`Search Form: Should render svg`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--base`
        )
        cy.get(`svg`).should('exist')
    })

    it(`Search Form: Should render span`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--base`
        )
        cy.get(`span`).should('exist')
    })

    it(`Search Form: Should render u-visually-hidden`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--base`
        )
        cy.get(`.u-visually-hidden`).should('exist')
    })

    it(`Search Form: Should render submit`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--base`
        )
        cy.get('form').submit().should('exist')
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('test');
         })
    })

    it(`Search Form: Should render action`, () => {
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=components-search-form--with-action`
        )
        cy.get('form').submit().then(() => {
            cy.url().should('include', 'https://carleton.ca');
        });

    })
})