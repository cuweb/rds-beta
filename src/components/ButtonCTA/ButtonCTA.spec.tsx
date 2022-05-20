describe('Button CTA', () => {
    beforeEach(() => {
        cy.global() // running the global state test commands before each test
    })

    const button = {
        default: `.c-buttoncta`,
        ghost: `.c-buttoncta--ghost`,
        full: `.c-buttoncta--full`,
        centered: `.c-buttoncta--center`,
    }

    const types = [
        {
            nane: 'Default',
            tag: '',
        },
        {
            nane: 'Ghost',
            tag: '--ghost',
        },
        {
            nane: 'Grey',
            tag: '--grey',
        },
        {
            nane: 'Full Width',
            tag: '--full',
        },
        {
            nane: 'Centered',
            tag: '--center',
        },
    ]

    types.map((type) => {
        it(`Should render the ${type.nane} button`, () => {
            cy.clearCookies()
            cy.visit(
                `${Cypress.env(
                    'baseUrl'
                )}/iframe.html?id=components-button-cta${type.tag}`
            )
            cy.get(`.c-buttoncta${type.tag}`).should('exist')
        })
    })
})
