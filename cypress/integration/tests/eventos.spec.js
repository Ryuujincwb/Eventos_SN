/// <reference types="cypress" />

import '../../support/commandsEventos'

describe('Gerenciar Eventos', () => {
    before(() => {
        // parâmetros: email, senha
        cy.login('teste.devadv02@yopmail.com', 'S@lve2021')
    })

    after(() => {
        cy.logout()
    })

    it("Cria eventos", () => {
        // parâmetro: quantidade de eventos que irá criar
        cy.criaEvento(5)
    });


    it("Limite de exclusão", () => {
        /*
        parâmetros: quantidade de ciclos e eventos que irá deletar
         -> o limite de exclusão em massa são 5 eventos
            ao tentar excluir os 6 eventos apenas 1 vez
            ele vai validar a mensagem 
        */
        cy.deletaEvento(1, 6)
    });

    it("Deleta eventos", () => {
        /*
        parâmetros: quantidade de ciclos e eventos que irá deletar
         -> o limite de exclusão em massa são 5 eventos
            ele executará selecionará os 5 eventos e excluirá,
            o processo será executado 2x deletando 10 eventos
        */
        cy.deletaEvento(1, 5)
    })
});