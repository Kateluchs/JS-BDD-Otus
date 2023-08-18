const loginPage = require("../pages/loginPage");
const config = require('../config/config');

Feature ('auth');

Before(({loginPage}) =>{
    loginPage.visit()
}
)

Scenario('Positive authentication', ({ I }) =>{
loginPage.login('admin', '!Qwerty1')
I.seeCurrentUrlEquals(`http://localhost:9200/d/`)
});

Scenario('Negative authentication: invalid password', ({ I }) =>{
    loginPage.login('admin', 'test')
    I.seeCurrentUrlEquals(`/d/login`)
    I.see(`Неправильные логин или пароль`)
});

Scenario('Negative authentication: empty inputs', ({ I }) =>{
    loginPage.login('', '')
    I.seeCurrentUrlEquals(`/d/login`)
    I.see(`Пожалуйста, заполните это поле`)

});

Scenario('Show and hide password', ({ I }) =>{
    I.fillField(loginPage.fields.passwordInput, 'Achfnk0')
    I.click(loginPage.eyeButton)
    I.seeInField(loginPage.fields.passwordInput, 'Achfnk0')
});

Scenario('Reset password button', ({ I }) =>{
    I.click(loginPage.resetPassButton)
    I.see(`Обратитесь к администратору для сброса пароля. Если у вас есть доступ к серверу – выполните сброс по инструкции`)
   
});

Scenario('Logout', ({ I }) =>{
    loginPage.login('admin', '!Qwerty1')
    I.seeCurrentUrlEquals(`http://localhost:9200/d/`)
    I.click(loginPage.logoutButton)
    I.seeCurrentUrlEquals(`http://localhost:9200/d/login`)
    I.amOnPage('http://localhost:9200')
    I.seeCurrentUrlEquals(`http://localhost:9200/d/login`)
    I.see(`Доступ запрещён. Пожалуйста, авторизуйтесь.`)
   
});