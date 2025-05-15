describe('Тестирование staya', function () {

    //Задание 1
     it('Успешная авторизация', () => {
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввела правильный имеил
         cy.get('#pass').type('iLoveqastudio1'); //Ввела правильный пароль
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки востановить пароль
         cy.get('#loginButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
        
     })

     //Задание 2
     it('Проверка логики восстановления пароля, неправильный имеил - [БАГ?]', () => { //Возможно БАГ - Должен написать, что такого имеила нет в базе данных, если не прописанно иначе
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#forgotEmailButton').click();  //Нажала на кнопку Забыли пароль?
         cy.get('#forgotForm > .header').should('be.visible');//Текст виден пользователю
         cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
         cy.get('#mailForgot').type('german1@dolnikov.ru'); //Ввела неправильный имеил
         cy.get('#restoreEmailButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
           
     })

     //Задание 3
     it('Верный логин неверный пароль', () => {
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввела правильный имеил
         cy.get('#pass').type('iLoveqastudio'); //Ввела неправильный пароль
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки востановить пароль
         cy.get('#loginButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
        
     })

     //Задание 4
     it('Неверный логин верный пароль', () => {
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#mail').type('dfkih@dolnikov.ru'); //Ввела правильный имеил
         cy.get('#pass').type('iLoveqastudio1'); //Ввела неправильный пароль
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки востановить пароль
         cy.get('#loginButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
        
     })
     
     //Задание 5
     it('E-mail без символа @, неправильный пароль', () => {
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#mail').type('germandolnikov.ru'); //Ввела имеил без @
         cy.get('#pass').type('iLoveqastudio'); //Ввела правильный пароль
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки востановить пароль
         cy.get('#loginButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
        
     })

     //Задание 6
     it('Проверка преобразования email к нижнему регистру, правильный пароль - [БАГ]', () => {  //БАГ - Логин должен уйти на бекенд автоматически применив нижний регистр
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#mail').type('GERMAN@DOLNIKOV.RU'); //Ввела имеил в верхнем регистре (!!!german@dolnikov.ru и GERMAN@DOLNIKOV.RU - одинаковая почта!!!)
         cy.get('#pass').type('iLoveqastudio1'); //Ввела првильный пароль
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки востановить пароль
         cy.get('#loginButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
        
     })

     //Добавила немного от себя, посмотреть как будет работать :-)
      it('Написание логина и пароля кириллицей', () => {
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#mail').type('аоапль@dпьфшд,сщь'); //Ввела имеил кириллицей
         cy.get('#pass').type('рлвщдвюажа1'); //Ввела пароль кириллицей
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки востановить пароль
         cy.get('#loginButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
        
     })       

     it('Путые поля e-mail и пароль', () => {
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#mail').should('have.value', ''); //Оставила пустое поле e-mail
         cy.get('#pass').should('have.value', ''); //Оставила пустое поле пароль
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки востановить пароль
         cy.get('#loginButton').should('be.disabled'); //Кнопка неактивна
        
     })

     it('Проверка минимальной длины пароля - [БАГ?]', () => { // Возможно БАГ - в большинстве интерфейсов предусмотрена валидация минимальной длины пароля, обычно минимум 6–8 символов
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Ввела правильный имеил
         cy.get('#pass').type('123'); //Ввела короткий пароль
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверка цвета кнопки востановить пароль
         cy.get('#loginButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Слишком короткий пароль'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
        
     })

     it('Проверка логики восстановления пароля', () => {
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#forgotEmailButton').click();  //Нажала на кнопку Забыли пароль?
         cy.get('#forgotForm > .header').should('be.visible');//Текст виден пользователю
         cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
         cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввела правильный имеил
         cy.get('#restoreEmailButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
    
     })
     
     it('Проверка логики восстановления пароля, имеил без @ - [БАГ?]', () => { //Возможно БАГ - Должен написать, что такого имеила нет в базе данных, если не прописанно иначе
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#forgotEmailButton').click();  //Нажала на кнопку Забыли пароль?
         cy.get('#forgotForm > .header').should('be.visible');//Текст виден пользователю
         cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
         cy.get('#mailForgot').type('germandolnikov.ru'); //Ввела имеил без @
         cy.get('#restoreEmailButton').click(); //Нажала на кнопку
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
           
     })
  
     
     })