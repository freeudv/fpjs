'use strict'

function map(array, fn) {
  let result = []

  for (let i in array) {
    result[i] = fn(array[i], i, array)
  }

  return result
}

module.exports = map
