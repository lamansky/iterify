'use strict'

const assert = require('assert')
const isArrayWith = require('is-array-with')
const iterify = require('.')

describe('iterify()', function () {
  it('should return an iterable as-is', function () {
    const arr = []
    assert.strictEqual(iterify(arr), arr)
    assert.strictEqual(iterify('test'), 'test')
  })

  it('should turn `undefined` into an empty array', function () {
    assert(isArrayWith(iterify()))
  })

  it('should turn `null` into an empty array', function () {
    assert(isArrayWith(iterify(null)))
  })

  it('should wrap any other value in an array', function () {
    assert(isArrayWith(iterify(123), 123))
    const obj = {}
    assert(isArrayWith(iterify(obj), obj))
  })

  it('should support the bind operator', function () {
    assert(isArrayWith(iterify.call(123), 123))
  })
})
