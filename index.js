/**
 * @typedef Counts
 *   Counts from input document.
 * @property {number} sentence
 *   Number of sentences.
 * @property {number} word
 *   Number of words.
 * @property {number} [complexPolysillabicWord=0]
 *   Number of words that consist of three or more syllables, that are jargon,
 *   proper nouns, or compound words.
 */

/**
 * @typedef {Counts} GunningFogCounts
 *   Deprecated: please use the `Counts` type instead.
 */

const complexWordWeight = 100
const weight = 0.4

/**
 * Given an object containing the number of words (`word`), the number of
 * sentences (`sentence`), and the number of complex (i.e., jargon, proper
 * nouns, compound words) polysillabic (three or more syllables) words
 * (`complexPolysillabicWord`) in a document, returns the grade level
 * associated with the document.
 *
 * @param {Counts} counts
 *   Counts from input document.
 * @returns {number}
 *   Grade level associated with the document.
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
