///<reference types = "cypress"/>

function visitToastr() {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    cy.viewport("macbook-11")
    cy.get('[src="assets/images/material-dark-theme.jpg"').click()
    cy.get('[title="Modal & Overlays"]').click()
    cy.get('[title="Toastr"]').click()

}
function detectPosition(toast) {

    if (toast.top === 0 && toast.left === 0) {
        return "top-left"
    } else if (toast.top === 0 && toast.left != 0) {
        return "top-right"
    } else if (toast.top != 0 && toast.left === 0) {
        return "bottom-left"
    } else if (toast.top != 0 && toast.left != 0) {
        return "bottom-right"
    }
}

describe('Toasts displaying check', () => {
    beforeEach(() => {
        visitToastr()
    })

    const testData = [
        {
            position: "top-right",
            type: "primary", // "success", "info", "warning", "primary"
            title: "toaster title",
            content: "toaster content",
        },
        {
            position: "top-left",
            type: "success",
            title: "toaster title 2",
            content: "toaster content 2",
        },
        {
            position: "bottom-left",
            type: "info",
            title: "toaster title 3",
            content: "toaster content 3",
        },
        {
            position: "bottom-right",
            type: "warning",
            title: "toaster title 4",
            content: "toaster content 4",
        }
    ]
    
    const typeColorReferrence = {
        "primary": {
            color: "rgb(233, 29, 99)",
            icon: "email"
        },
        "success": {
            color: "rgb(96, 175, 32)",
            icon: "checkmark"
        },
        "info": {
            color: "rgb(4, 149, 238)",
            icon: "question-mark"
        },
        "warning": {
            color: "rgb(255, 159, 5)",
            icon: "alert-triangle"
        }
    }
    testData.forEach(({ position, type, title, content }) => {
        it.only(`Test: ${position} ${type}`, () => {
            cy.get('.mat-ripple.position-select')
                .click()
            cy.get(`[ng-reflect-value="${position}"]`)
                .click()

            cy.get('[name="title"]')
                .clear()
                .type(`${position} ${type} ${title}`)

            cy.get('[name="content"]')
                .clear()
                .type(`${position} ${type} ${content}`)

            cy.get('[ng-reflect-selected="primary"]')
                .click()
            cy.get(`[ng-reflect-value="${type}"]`)
                .click()

            cy.get('[name="timeout"]')
                .clear()
                .type(0)

            cy.get('nb-card-footer>button')
                .first()
                .click()

            cy.log("--CHECKING TOAST--")
            cy.get('#cdk-overlay-2').within(elem => {
                {
                    cy.get('.title.subtitle')
                        .should('contain', `${title}`)

                    cy.get('.message')
                        .should('contain', `${content}`)

                    let toast = elem.get(0).getBoundingClientRect()
                    expect(detectPosition(toast)).eq(`${position}`)

                    cy.get('g')
                        .last()
                        .should('have.attr', 'data-name', `${typeColorReferrence[type].icon}`) //icon primary

                    cy.document()
                        .within(() => {
                            cy.get('.nb-theme-material-dark nb-toast')
                                .should('have.css', 'background-color', `${typeColorReferrence[type].color}`)
                        })
                }
            })
        })
    })
})