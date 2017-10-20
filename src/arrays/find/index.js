'use strict'

function find(array, fn) {
  for (let i of array) {
    if (fn(i)) return i
  }

  return null
}

module.exports = find
