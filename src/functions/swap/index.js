'use strict'

const swap = fn => (arg1, arg2) => fn(arg2, arg1)

module.exports = swap
