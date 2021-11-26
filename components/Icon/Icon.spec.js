describe('Icon', () => {
  beforeEach(() => {
    cy.global(); // running the global state test commands before each test 
})

  const icon = {
    default: `.c-icon`,
  };

  it(`Should render the default icon`, () => {
    cy.clearCookies();
    cy.visit(`${Cypress.env('baseUrl')}/iframe.html?id=components-icon--plus`);
    cy.get(icon.default).should('exist');
  });
});
