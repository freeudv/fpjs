'use strict'

function every(array, fn) {
  for (let i of array) {
    if (!fn(i)) {
      return false
    }
  }

  return true
}

module.exports = every
