
describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
       })
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('Iraakiryukhinaa@mail.ru');
        cy.get('#restoreEmailButton').click();
       })
    it('Негативный кейс с неверным паролем', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio123');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');

       })
    it('Негативный кейс с неверным логином', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germanа@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
       })
    it('Негативный кейс, валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
       })
})
