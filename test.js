/*!
 * is-es6-generator <https://github.com/tunnckoCore/is-es6-generator>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isGenerator = require('./index')

test('is-es6-generator:', function () {
  test('should return false with non-generators', function () {
    test.equal(isGenerator(null), false)
    test.equal(isGenerator(undefined), false)
    test.equal(isGenerator([1, 2, 3]), false)
    test.equal(isGenerator({name: 'GeneratorFunction'}), false)
    test.equal(isGenerator(25), false)
    test.equal(isGenerator('test'), false)
    test.equal(isGenerator(function * () {}), false)
  })
  test('should return true with a generator', function () {
    test.equal(isGenerator((function * () {})()), true)
    test.equal(isGenerator((function * () { yield 42 })()), true)
  })
})
