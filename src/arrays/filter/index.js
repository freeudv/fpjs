'use strict'

function filter(array, fn) {
  let result = []

  for (let i in array) {
    if (fn(array[i], i, array)) {
      result.push(array[i])
    }
  }
  return result
}

console.log(filter([1, 2, 3, 4, 5], n => n % 2 === 0))
module.exports = filter
