'use strict'

function forEach(array, fn) {
  for (let i of array) {
    fn(i)
  }
}

module.exports = forEach
