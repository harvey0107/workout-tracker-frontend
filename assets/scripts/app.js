'use strict'
const authEvents = require('./auth/events')
const trackerEvents = require('./tracker/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#tracker').on('submit', trackerEvents.onTracker)
  $('#record').on('click', trackerEvents.onRecord)
  $('#update').on('submit', trackerEvents.onUpdate)
  $('#remove').on('submit', trackerEvents.onRecord)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#tracker').hide()
  $('#update').hide()
  $('#record').hide()
  $('#remove').hide()
  $('#sign-out-form').hide()
})
