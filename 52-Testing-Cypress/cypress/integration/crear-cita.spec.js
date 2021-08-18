/// <reference types="cypress"/>

describe('Llenar campos para una nueva cita', ()=>{
    it('Campos de una cita', ()=>{

        cy.visit('index.html')

        cy.get('[data-cy=mascota-input]')
            .type('Matias');

        cy.get('[data-cy=propietario-input]')
            .type('Daniel');

        cy.get('[data-cy=telefono-input]')
            .type('748932423');

        cy.get('[data-cy=fecha-input]')
            .type('2021-06-02');

        cy.get('[data-cy=hora-input]')
            .type('20:30');

        cy.get('[data-cy=sintomas-input]')
            .type('Se come su caca');
        
        cy.get('[data-cy=submit-cita]')
            .click();

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas ')

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')
        

    });

});
