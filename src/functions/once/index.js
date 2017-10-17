'use strict'

function once(fn) {
  let instance = false

  return function(...args) {
    if (!instance) {
      instance = true
      return fn(...args)
    }
  }
}

module.exports = once
