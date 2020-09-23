const store = require('../store')

const onSignUpSuccess = function (response) {
  $('#message').show()
  $('#message').text('Welcom my friden' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#message').hide(6000)
}
const onSignUpFailure = function () {
  $('#message').show()
  $('#message').text('Failed!')
  $('#sign-up-form').trigger('reset')
  $('#message').hide(6000)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').show()
  $('#message').text('Nice to see you again ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#start-game').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#message').hide(6000)
  $('#tracker').show()
  $('#update').show()
  $('#record').show()
  $('#remove').show()
}

const onSignInFailure = function () {
  $('#message').show()
  $('#message').text('Oops, Try again!')
  $('#sign-in-form').trigger('reset')
  $('#message').hide(6000)
}

const onChangePasswordSuccess = function () {
  $('#message').show()
  $('#message').text('Changed password successfully')
  $('#change-password-form').trigger('reset')
  $('#message').hide(6000)
}
const onChangePasswordFailure = function () {
  $('#message').show()
  $('#message').text('Error')
  $('#change-password-form').trigger('reset')
  $('#message').hide(6000)
}

const onSignOutSuccess = function () {
  $('#message').show()
  $('#sign-out-form').trigger('reset')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#tracker').hide()
  $('#update').hide()
  $('#record').hide()
  $('#remove').hide()
  $('#message').text('See you later')
  $('#message').hide(10000)
}
const onSignOutFailure = function () {
  $('#message').text('Oops')
  $('#sign-out-form').trigger('reset')
  $('#message').hide(6000)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
