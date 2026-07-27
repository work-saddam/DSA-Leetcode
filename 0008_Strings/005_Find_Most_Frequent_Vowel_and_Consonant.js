// 3541. Find Most Frequent Vowel and Consonant
// Leetcode: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/

// Approach 1:
// var maxFreqSum = function (s) {
//     const count = {}
//     let vowelSet = new Set('aeiou')
//     let maxVovel = 0
//     let maxConsonant = 0

//     // counting character
//     for (let char of s) {
//         count[char] = (count[char] || 0) + 1
//     }

//     // Finding maximum count
//     for (let char in count) {
//         if (vowelSet.has(char)) {
//             maxVovel = count[char] > maxVovel ? count[char] : maxVovel
//         } else {
//             maxConsonant = Math.max(count[char], maxConsonant)
//         }
//     }

//     return (maxVovel + maxConsonant)
// };
// // Time Complexity = O(n)
// // Space Complexity = O(1)

//Approach 2: language independent
var maxFreqSum = function (s) {
  let count = {};
  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) {
      count[s[i]] = 1;
    } else {
      count[s[i]]++;
    }
  }

  let vowelSet = new Set("aeiou");
  let maxVowel = 0;
  let maxConsonant = 0;
  let keys = Object.keys(count);

  for (let i = 0; i < keys.length; i++) {
    if (vowelSet.has(keys[i])) {
      maxVowel = Math.max(count[keys[i]], maxVowel);
    } else {
      maxConsonant = Math.max(count[keys[i]], maxConsonant);
    }
  }
  return maxVowel + maxConsonant;
};
// Time Complexity = O(n)
// Space Complexity = O(1)
