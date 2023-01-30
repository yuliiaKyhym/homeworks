///<reference types="cypress"/>

const paramTest = ({testData, expectedResult}) =>
function ()
{
    cy.visit("www.google.com")
    cy.get('input.gLFyf').type(`${testData}`)
    cy.get('input.gLFyf').should('contain.value', `${expectedResult}`)
}

it('Search data', paramTest({testData: 1, expectedResult: 1}))
it('Search data', paramTest({testData: 2, expectedResult: 2}))
it('Search data', paramTest({testData: 3, expectedResult: 3}))
it('Search data', paramTest({testData: 'Cypress', expectedResult: 'Cypress'}))


//version 2

const data = [
    { testData: 1, expectedResult: 1   },
    { testData: 2, expectedResult: 3   }
]

data.forEach(({data, expectedResult}) => {
it(`search data ${testData}`, () =>{

})
})