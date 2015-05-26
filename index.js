/*!
 * is-es6-generator <https://github.com/tunnckoCore/is-es6-generator>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

/**
 * Check whether a `value` is a generator.
 *
 * @param  {Mixed} `value`
 * @return {Boolean} always boolean `true` or `false`, never `null` or `undefined`
 * @api public
 */
module.exports = function isGenerator (value) {
  if (!value) return false
  if (typeof value.next === 'function' && typeof value.throw === 'function') return true

  return false
}
