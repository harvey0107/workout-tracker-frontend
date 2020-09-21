const trackerStore = require('../store')

const onTrackerSuccess = function (response) {
  $('#message').show()
  $('#message').text('Nice workout')
  $('#tracker').trigger('reset')
  $('#message').hide()
}
const onTrackerFailure = function () {
  $('#message').show()
  $('#message').text('Failed!')
  $('#tracker').trigger('reset')
  $('#message').hide()
}

const onRecordSuccess = function (response) {
  $('#message').show()
  $('#message').text('Check your records!')
  $('#message').hide()
  trackerStore.user = response.user
  console.log('response is', response)
  const recordlist = response.tracker
  let sendhtml = '<ol>'
  recordlist.forEach(data => {
    sendhtml += `<li id=${data._id}> Exercis:${data.exercise}
    \n Weight: ${data.weight} \n Target Muscle: ${data.target_muscle}
    \n Sets: ${data.sets} \n </li>`
    return sendhtml
  })
  sendhtml += '</ol>'
  console.log(recordlist)
  $('#sawRecords').html(sendhtml)
  //$('#sawRecords').hide(100000)
}

const onRecordFailure = function () {
  $('#message').show()
  $('#message').text('Oops, Try again!')
  $('#sign-in-form').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#message').show()
  $('#message').text('Workout have been updated successfully')
  $('#update').trigger('reset')
  $('#message').hide(6000)
}
const onUpdateFailure = function () {
  $('message').show()
  $('#message').text('Error')
  $('#update').trigger('reset')
  $('#message').hide(6000)
}

const onRemoveSuccess = function () {
  $('message').show()
  $('#message').text('Record have been removed successfully')
  $('message').hide(6000)
}

const onRemoveFailure = function () {
  $('message').show()
  $('#message').text('Record was not removed!')
  $('message').hide(6000)
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
