describe('Тестирование staya', function () {
   
    it('Проверка логики восстановления пароля, неправильный имеил - [БАГ?]', () => { //Возможно БАГ - Должен написать, что такого имеила нет в базе данных, если не прописанно иначе
         cy.visit('https://login.qa.studio'); //Зашла на сайт
         cy.get('#forgotEmailButton').click();  //Нажала на кнопку Забыли пароль?
         cy.get('#forgotForm > .header').should('be.visible');//Текст виден пользователю
         cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
         cy.get('#mailForgot').type('german1@dolnikov.ru'); //Ввела неправильный имеил
         cy.get('#restoreEmailButton'); //Нажала на кнопку
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверила, что текст есть после авторизации
         cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка наличия крестика, он виден пользователю
           
     })

     })