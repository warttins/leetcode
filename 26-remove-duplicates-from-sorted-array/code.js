/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = (nums) => {
  let counter = 0
  let indexOfLastNonDuplicate = 0

  for (let i = 0; i < nums.length; i += 1) {
    const isEqual = nums[indexOfLastNonDuplicate] === nums[i]
    const isNotEqual = !isEqual

    if (isNotEqual) {
      counter += 1
      indexOfLastNonDuplicate += 1
      nums[indexOfLastNonDuplicate] = nums[i]
    }
  }

  return counter + 1
}