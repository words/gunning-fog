var complexWordWeight = 100
var weight = 0.4

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
