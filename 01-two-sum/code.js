/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(nums, target) {
//   for (let i = 1; i < nums.length; i += 1) {
//     for (let j = 0; j < i; j += 1) {
//       if (nums[j] + nums[i] === target) return [j, i]
//     }
//   }
// };

var twoSum = function (nums, target) {
  const lookup = []
  let result = []
  for (let i = 1; i < nums.length; i += 1) {
    lookup.push(nums[i - 1])

    const indexInLookup = lookup.indexOf(target - nums[i])
    if (nums[i] + lookup[indexInLookup] === target) {
      result = [indexInLookup, i]
    }
  }

  return result
}
