'use strict'

function times(num, fn) {
  return (...args) => {
    for (let i = 0; i < num; i++) {
      fn(...args)
    }
  }
}

module.exports = times
