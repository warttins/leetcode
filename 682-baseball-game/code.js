/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const record = []
  let score = 0

  for (let i = 0; i < operations.length; i += 1) {
    if (
      operations[i] !== '+' &&
      operations[i] !== 'D' &&
      operations[i] !== 'C'
    ) {
      record.push(Number(operations[i]))
      score += Number(operations[i])
    }

    if (operations[i] === '+') {
      const sumTwoLastValues = Number(
        record[record.length - 1] + record[record.length - 2],
      )
      record.push(sumTwoLastValues)
      score += sumTwoLastValues
    }

    if (operations[i] === 'D') {
      const doubleCurrentValue = record[record.length - 1] * 2
      record.push(doubleCurrentValue)
      score += doubleCurrentValue
    }

    if (operations[i] === 'C') {
      const invalidatedLastValue = record.pop()
      score -= invalidatedLastValue
    }
  }

  return score
}
