// 3541. Find Most Frequent Vowel and Consonant
// Leetcode: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/

var maxFreqSum = function (s) {
  let map = {};
  let maxVowel = 0;
  let maxConsonant = 0;
  for (let ch of s) {
    map[ch] = (map[ch] || 0) + 1;
  }

  let vowelSet = new Set("aeiou");

  for (let ch in map) {
    if (vowelSet.has(ch)) {
      maxVowel = map[ch] > maxVowel ? map[ch] : maxVowel;
    } else {
      maxConsonant = map[ch] > maxConsonant ? map[ch] : maxConsonant;
    }
  }
  return maxVowel + maxConsonant;
};
