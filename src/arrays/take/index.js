'use strict'

function take(array, end) {
  let result = []
  let length = end < array.length ? end : array.length

  if (!end) return array
  if (end < 1) return result

  for (let i = 0; i < length; i++) {
    result.push(array[i])
  }

  return result
}

module.exports = take
