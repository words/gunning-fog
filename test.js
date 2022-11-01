import assert from 'node:assert'
import test from 'node:test'
import {gunningFog} from './index.js'

test('gunningFog', function () {
  // @ts-expect-error
  assert.ok(Number.isNaN(gunningFog()), 'NaN when an invalid value is given')

  assert.equal(round(gunningFog({sentence: 1, word: 13})), 5.2)

  assert.equal(
    round(gunningFog({sentence: 1, word: 13, complexPolysillabicWord: 2})),
    11.353_846
  )
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
