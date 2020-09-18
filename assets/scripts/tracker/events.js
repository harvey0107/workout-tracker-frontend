const getFormFields = require('./../../../lib/get-form-fields')
const trackerapi = require('./api')
const trackerui = require('./ui')

const onTracker = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  trackerapi.tracker(data)
    .then(trackerui.onTrackerSuccess)
    .catch(trackerui.onTrackerFailure)
}
const onRecord = function () {
  event.preventDefault()
  trackerapi.record()
    .then(trackerui.onRecordSuccess)
    .catch(trackerui.onRecordFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  trackerapi.update(data)
    .then(trackerui.onUpdateSuccess)
    .catch(trackerui.onUpdateFailure)
}

const onRemove = function (event) {
  event.preventDefault()
  trackerapi.remove()
    .then(trackerui.onRemoveSuccess)
    .catch(trackerui.onRemoveFailure)
}

module.exports = {
  onTracker: onTracker,
  onRecord: onRecord,
  onUpdate: onUpdate,
  onRemove: onRemove
}
