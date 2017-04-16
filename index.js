'use strict';

module.exports = gunningFog;

var COMPLEX_WORD_WEIGHT = 100;
var WEIGHT = 0.4;

function gunningFog(counts) {
  if (!counts || !counts.sentence || !counts.word) {
    return NaN;
  }

  return WEIGHT * (
    (counts.word / counts.sentence) +
    (
      COMPLEX_WORD_WEIGHT *
      ((counts.complexPolysillabicWord || 0) /
      counts.word))
  );
}
