'use strict'

function flatten(arrays) {
  let result = []

  for (let item of arrays) {
    result = [...result, ...item]
  }
  return result
}

module.exports = flatten
