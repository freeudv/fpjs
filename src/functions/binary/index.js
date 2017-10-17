'use strict'

function binary(fn) {
  return function(arg1, arg2) {
    return fn(arg1, arg2)
  }
}

module.exports = binary
