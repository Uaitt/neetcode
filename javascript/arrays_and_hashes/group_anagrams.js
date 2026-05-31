class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let anagrams = [];
    let isAnagram;
    for (const str of strs) {
      isAnagram = false;
      for (const subset of anagrams) {
        if (this.isAnagram(str, subset[0])) {
          isAnagram = true;
          subset.push(str);
          break;
        }
      }
      if (!isAnagram) {
        anagrams.push([str]);
      }
    }
    return anagrams;
  }

  isAnagram(str, anagram) {
    return (
      str.split("").sort().toString() === anagram.split("").sort().toString()
    );
  }
}
