'use strict'

function reduce(array, fn, initialValue) {
  let result = initialValue || array[0]

  for (let i = initialValue ? 0 : 1; i < array.length; i++) {
    result = fn(result, array[i])
  }

  return [result]
}

module.exports = reduce
