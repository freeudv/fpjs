'use strict'

const reduce = require('../reduce')

function drop(array, start = 0) {
  let result = []
  let startAt = start > 0 ? start : 0
  let length = array.length

  for (let i = startAt; i < length; i++) {
    result = [...result, array[i]]
  }

  return result
}

module.exports = drop
