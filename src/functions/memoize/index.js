'use strict'

function memoize(fn) {
  let cache = {}
  return function(...args) {
    if (!cache[arg]) cache[arg] = fn(...arg)

    return cache[arg]
  }
}

module.exports = memoize
