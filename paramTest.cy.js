function visitFormLayouts() {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    cy.get('[src="assets/images/material-dark-theme.jpg"').click()
    cy.get('[title="Forms"]').click()
    cy.get('[title="Form Layouts"]').click()
}

describe('Test suite 1', () => {
    beforeEach(() => {
        visitFormLayouts()
    })
    const data = [
        { email: 1, expectedEmail: 1, password: 1, expectedPassword: 1 },
        { email: 'valid@gmail.com', expectedEmail: 'valid@gmail.com', password: 'yul12', expectedPassword: 'yul12' }
    ]

    data.forEach(({ email, expectedEmail, password, expectedPassword }) => {
        it(`Validation enter and password  ${email}`, () => {
            cy.get('#exampleInputEmail1').type(`${email}`)
            cy.get('#exampleInputEmail1').should('contain.value', `${expectedEmail}`)
            cy.get('#exampleInputPassword1').type(`${password}`)
            cy.get('#exampleInputPassword1').should('contain.value', `${expectedPassword}`)
        })
    })
})