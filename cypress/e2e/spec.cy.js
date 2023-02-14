//<reference type="cypress"/>
describe('Sign up and login', () => {
  it('Sign up', () => {

    cy.visit('https://automationteststore.com/')
    cy.get('#customer_menu_top a[href="https://automationteststore.com/index.php?rt=account/login"]')
      .click()
    cy.get('[title="Continue"]')
      .click()

    cy.get('#AccountFrm_firstname')
      .type('Yuliia')

    cy.get('#AccountFrm_lastname')
      .type('Kyhym')

    cy.get('#AccountFrm_email')
      .type('email1046782@gmail.com')

    cy.get('#AccountFrm_telephone')
      .type('0931112233')

    cy.get('#AccountFrm_fax')
      .type('0932221133')

    cy.get('#AccountFrm_company')
      .type('My Company')

    cy.get('#AccountFrm_address_1')
      .type('Kyiv')

    cy.get('#AccountFrm_address_2')
      .type('Lviv')

    cy.get('#AccountFrm_city')
      .type('Kyiv')

    cy.get('#AccountFrm_postcode')
      .type('08702')

    cy.get('#AccountFrm_country_id')
      .select('Ukraine')

    cy.get('#AccountFrm_zone_id')
      .select('Kyiv')

    cy.get('#AccountFrm_loginname')
      .type('Yulchik4')

    cy.get('#AccountFrm_password')
      .type('12345678')

    cy.get('#AccountFrm_confirm')
      .type('12345678')

    cy.get('#AccountFrm_newsletter0')
      .check()

    cy.get('#AccountFrm_agree')
      .check()

    cy.get('[title="Continue"]')
      .click()

    cy.get('.maintext')
      .should('contain.text', ' Your Account Has Been Created!')
  })

  it('Login', () => {
    cy.visit('https://automationteststore.com/')
    cy.get('#customer_menu_top a[href="https://automationteststore.com/index.php?rt=account/login"]')
      .click()
    cy.get('#loginFrm_loginname')
      .type('Yulchik3')

    cy.get('#loginFrm_password')
      .type('12345678')

    cy.get('[title="Login"]')
      .click()

    cy.get('.maintext')
      .should('contain.text', 'My Account')

  })

})