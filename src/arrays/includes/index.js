'use strict'

function includes(array, item) {
  for (let i of array) {
    if (i === item) {
      return true
    }
  }
  return false
}

module.exports = includes
