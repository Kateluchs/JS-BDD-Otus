const { I } = inject();

module.exports = {
  fields: {
    loginInput: {css:'input[name="loginName"]'},
    passwordInput: {css:'input[name="password"]'},

  },
  submitButton: {css:'button[type="submit"]'},
  eyeButton: {css:'i[class*=icons_icon-password]'},
  resetPassButton: {css:'button[class*=Login_forgotPasswordButton]'},
  logoutButton: {css:'i[class^=icons_icon-logout]'},

  visit () {
    I.amOnPage(`/d/login`);
  },

  login (login, password) {
    I.click(this.fields.loginInput)
    I.fillField(this.fields.loginInput, login);
    I.fillField(this.fields.passwordInput, password);
    I.click(this.submitButton);
  },

}
