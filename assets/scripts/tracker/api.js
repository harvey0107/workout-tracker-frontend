'use strict'
const trackerConfig = require('./../config')
const trackerStore = require('./../store')

const tracker = function (data) {
  console.log('data is' + data)
  return $.ajax({
    url: trackerConfig.apiUrl + '/tracker',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + trackerStore.user.token },
    data: data
  })
}

const record = function (data) {
  return $.ajax({
    url: trackerConfig.apiUrl + '/tracker',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + trackerStore.user.token
    }
    // data:
  })
}

const update = function (data) {
  return $.ajax({
    url: trackerConfig.apiUrl + '/tracker/' + data.tracker.id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + trackerStore.user.token },
    data: {
      tracker: {
        exercise: data.tracker.exercise,
        weight: data.tracker.weight,
        target_muscle: data.tracker.target_muscle,
        sets: data.tracker.sets
      }
    }
  })
}

const remove = function (trackerId) {
  return $.ajax({
    url: trackerConfig.apiUrl + '/tracker/' + trackerId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + trackerStore.user.token
    }
  })
}

module.exports = {
  tracker: tracker,
  record: record,
  update: update,
  remove: remove
}
