class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let mostFrequent = [];
    let tally = new Map();

    for (const num of nums) {
      tally.set(num, (tally.get(num) || 0) + 1);
    }

    const values = Array.from(tally.values());
    const keys = Array.from(tally.keys());
    let currentMax;
    let index;

    for (let i = 0; i < k; i++) {
      currentMax = Math.max(...values);
      index = values.indexOf(currentMax);

      mostFrequent.push(keys[index]);

      values.splice(index, 1);
      keys.splice(index, 1);
    }

    return mostFrequent;
  }
}
