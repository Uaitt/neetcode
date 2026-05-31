class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const length = nums.length;
    for (let [i, num] of nums.entries()) {
      for (let j = 0; j < length; j++) {
        if (i === j) {
          continue;
        }
        if (num + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}
