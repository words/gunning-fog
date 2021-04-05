import test from 'tape'
import {gunningFog} from './index.js'

test('gunningFog', function (t) {
  // @ts-ignore
  t.ok(Number.isNaN(gunningFog()), 'NaN when an invalid value is given')

  t.equal(round(gunningFog({sentence: 1, word: 13})), 5.2)

  t.equal(
    round(gunningFog({sentence: 1, word: 13, complexPolysillabicWord: 2})),
    11.353846
  )

  t.end()
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
