
describe('Авто тесты на авторизацию', function () {
    
    it('Позитивный кейс авторизации правильный логин правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на нужный сайт
        cy.get('#mail').type('german@dolnikov.ru'); // найти поле логин и написать верный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); // находим поле пароль и вводим верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаем на кнопку войти
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // находим поле и проверяем нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
        })
    it('Авто тест на проверку логики востановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зайти на нужный сайт
        cy.get('#forgotEmailButton').click(); // находим кнопку забыли пароль нажимаем на нее
        cy.get('#mailForgot').type('german@dolnikov.ru'); // находим кнопку имейл вводим туда имейл
        cy.get('#restoreEmailButton').click(); // находим поле отправить код, нажимаем на него
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // находим поле проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // находим крестик проверяем что он виден 
        })
    it('Правильный логин не правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на нужный сайт
        cy.get('#mail').type('german@dolnikov.ru'); // найти поле логин и написать верный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio12'); // находим поле пароль и вводим неверный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаем на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // находим поле с текстом и проверяем его
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка видна
    })
    it(' Не правильный логин правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на нужный сайт
        cy.get('#mail').type('geerman@dolnikov.ru'); // найти поле логин и написать неверный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); // находим поле пароль и вводим верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаем на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // находим поле с текстом и проверяем его
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка видна
    })
    it(' Негативный тест валидации', function () {
        cy.visit('https://login.qa.studio/'); // зайти на нужный сайт
        cy.get('#mail').type('geermandolnikov.ru'); // найти поле логин и написать неверный логин по валидации без @
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); // находим поле пароль и вводим верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаем на кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // находим поле с текстом и проверяем его
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка крестика видна
    })
    it(' Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зайти на нужный сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // пишем логин строчными буквами
        cy.get('#loginButton').should('be.disabled'); // кнопка не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); // находим поле пароль и вводим верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная
        cy.get('#loginButton').click(); // нажимаем на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // находим поле с текстом и проверяем его
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка крестика видна
    })

    


       




})
