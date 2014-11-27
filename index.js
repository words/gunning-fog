'use strict';

/**
 * Constants.
 */

var COMPLEX_WORD_WEIGHT,
    WEIGHT;

COMPLEX_WORD_WEIGHT = 100;
WEIGHT = 0.4;

/**
 * Get the grade level of a given value according to the Gunning Fog
 * Index. More information is available at WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/Gunning_fog_index
 *
 * @param {Object} counts
 * @param {number} counts.word - Number of words.
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.complexPolysillabicWord - Number of complex
 *   (exlcuding jargon, proper nouns, compound words) polysillabic words
 *   (three or more syllables).
 * @return {number}
 */

function gunningFog(counts) {
    if (!counts || !counts.sentence || !counts.word) {
        return NaN;
    }

    return WEIGHT * (
        (counts.word / counts.sentence) +
        COMPLEX_WORD_WEIGHT *
        ((counts.complexPolysillabicWord || 0) / counts.word)
    );
}

/**
 * Export `gunningFog`.
 */

module.exports = gunningFog;
