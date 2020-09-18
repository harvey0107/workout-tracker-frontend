const trackerStore = require('../store')

const onTrackerSuccess = function (response) {
  $('#message2').show()
  $('#message2').text('Nice workout' + response.user)
  $('#tracker').trigger('reset')
}
const onTrackerFailure = function () {
  $('#message2').show()
  $('#message2').text('Failed!')
  $('#tracker').trigger('reset')
}

const onRecordSuccess = function (response) {
  trackerStore.user = response.user
  console.log(response)
  const recordlist = response.tracker
  let sendhtml = '<ol>'
  recordlist.forEach(data => {
    sendhtml += `<li id=${data._id}> Exercis:${data.exercise}
    \n Weight: ${data.weight} \n Target Muscle: ${data.target_muscle}
    \n Sets: ${data.sets} </li>`
    return sendhtml
  })
  sendhtml += '</ol>'
  console.log(recordlist)
  // recordlist.forEach(val => )
  $('#sawRecords').html(sendhtml)
  /* $('#message2').show()
  $('#message2').text('Nice to see you again ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#start-game').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#message2').hide(6000) */
}

const onRecordFailure = function () {
  /* $('#message2').show()
  $('#message2').text('Oops, Try again!')
  $('#sign-in-form').trigger('reset') */
}

const onUpdateSuccess = function () {
  /* $('#message3').show()
  $('#message3').text('Changed password successfully')
  $('#change-password-form').trigger('reset')
  $('#message3').hide(6000) */
}
const onUpdateFailure = function () {
  /* $('#message3').show()
  $('#message3').text('Error')
  $('#change-password-form').trigger('reset')
  $('#message3').hide(6000) */
}

const onRemoveSuccess = function () {
}

const onRemoveFailure = function () {
}

module.exports = {
  onTrackerSuccess,
  onTrackerFailure,
  onRecordSuccess,
  onRecordFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onRemoveSuccess,
  onRemoveFailure
}
