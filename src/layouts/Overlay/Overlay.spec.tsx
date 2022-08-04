describe('Overlay', () => {
    const overlayContainer = `.l-overlay-modal`

    it(`Should NOT render on load`, () => {
        cy.clearCookies()
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=main-concepts-layouts-overlay--default`
        )
        cy.get(overlayContainer).should('not.exist')
    })

    it(`Should render on button click`, () => {
        cy.get('button.c-buttoncta').click()
    })

    it(`Should have aria-modal equals to true`, () => {
        cy.get(overlayContainer).should('have.attr', 'aria-modal', 'true')
    })

    it(`Should have aria-hidden equals to false`, () => {
        cy.get(overlayContainer).should('have.attr', 'aria-hidden', 'false')
    })

    it(`Should accept a CSS custom class`, () => {
        cy.get(`${overlayContainer} .custom__class`).should('exist')
    })

    it(`Should accept content`, () => {
        cy.get(`${overlayContainer} div`).should('not.be.empty')
    })

    it(`Should close modal on click`, () => {
        cy.get(`${overlayContainer} button.c-buttoncta`).click()
    })
})

describe('Overlay Transparent Background ', () => {
    const overlayTransparentContainer = `.l-overlay-modal-transparent`
    it(`Should has transparent background`, () => {
        cy.clearCookies()
        cy.visit(
            `${Cypress.env(
                'baseUrl'
            )}/iframe.html?id=main-concepts-layouts-overlay--transparent-background`
        )
        cy.get(overlayTransparentContainer).should('not.exist')
    })
    it(`Should render on button click`, () => {
        cy.get('button.c-buttoncta').click()
    })
    it(`Should have aria-modal equals to true`, () => {
        cy.get(overlayTransparentContainer).should(
            'have.attr',
            'aria-modal',
            'true'
        )
    })

    it(`Should have aria-hidden equals to false`, () => {
        cy.get(overlayTransparentContainer).should(
            'have.attr',
            'aria-hidden',
            'false'
        )
    })
    it(`Should accept content`, () => {
        cy.get(`l-overlay-modal-transparent div`).should('not.be.empty')
    })
})
export {}
