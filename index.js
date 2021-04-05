var complexWordWeight = 100
var weight = 0.4

/**
 * @typedef {Object.<string, number>} GunningFogCounts
 * @property {number} sentence
 * @property {number} word
 */

/**
 * Given an object containing the number of words (`word`), the number of sentences (`sentence`), and the number of complex (excluding jargon, proper nouns, compound words) polysillabic (three or more syllables) words (`complexPolysillabicWord`) in a document, returns the grade level associated with the document.
 *
 * @param {GunningFogCounts} counts
 * @returns {number}
 */
export function gunningFog(counts) {
  if (!counts || !counts.sentence || !counts.word) {
    return Number.NaN
  }

  return (
    weight *
    (counts.word / counts.sentence +
      complexWordWeight * ((counts.complexPolysillabicWord || 0) / counts.word))
  )
}
