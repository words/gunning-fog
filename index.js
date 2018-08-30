'use strict'

module.exports = gunningFog

var complexWordWeight = 100
var weight = 0.4

function gunningFog(counts) {
  if (!counts || !counts.sentence || !counts.word) {
    return NaN
  }

  return (
    weight *
    (counts.word / counts.sentence +
      complexWordWeight * ((counts.complexPolysillabicWord || 0) / counts.word))
  )
}
