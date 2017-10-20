'use strict'

function sort(list, compare) {
  return [...list].sort(compare)
}

console.log(sort([{ id: 1 }, { id: 3 }, { id: 2 }], (a, b) => a.id - b.id))
module.exports = sort
