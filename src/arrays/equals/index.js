'use strict'

function equals(a, b) {
  if (a.length !== b.length) {
    return false
  }

  for (let i in a) {
    if (a[i] !== b[i]) {
      return false
    }
  }

  return true
}

module.exports = equals
