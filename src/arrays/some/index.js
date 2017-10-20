'use strict'

function some(array, fn) {
  for (let i of array) {
    if (fn(i)) {
      return true
    }
  }

  return false
}

module.exports = some
