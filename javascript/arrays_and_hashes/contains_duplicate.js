class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let alreadyScanned = [];
    for (const num of nums) {
      if (alreadyScanned.includes(num)) {
        return true;
      }
      alreadyScanned.push(num);
    }
    return false;
  }
}
