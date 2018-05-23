'use strict'

const isIterable = require('is-iterable')
const isNil = require('is-nil')
const sbo = require('sbo')

module.exports = sbo(x => isNil(x) ? [] : isIterable(x) ? x : [x])
