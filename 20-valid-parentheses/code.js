/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []

  for (let i = 0; i < s.length; i += 1) {
    if (
      stack[stack.length - 1] + s[i] === '()' ||
      stack[stack.length - 1] + s[i] === '{}' ||
      stack[stack.length - 1] + s[i] === '[]'
    ) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }

  if (!stack[0]) {
    return true
  }

  return false
}
