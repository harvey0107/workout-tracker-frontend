'use strict'
const trackerConfig = require('./../config')
const trackerStore = require('./../store')

const tracker = function (data) {
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
  })
}

const update = function (data) {
  return $.ajax({
    url: trackerConfig.apiUrl + '/tracker/' + trackerStore.tracker._id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + trackerStore.user.token },
    data: data
  })
}

const remove = function (trackerId) {
  return $.ajax({
    url: trackerConfig.apiUrl + '/tracker',
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
