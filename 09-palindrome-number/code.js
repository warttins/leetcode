/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let backwards = ''
  const stringfy = String(x)

  for (let i = stringfy.length - 1; i >= 0; i -= 1) {
    backwards += stringfy[i]
  }

  const result = backwards === stringfy
  return result
}
