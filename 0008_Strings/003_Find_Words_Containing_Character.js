// 2942. Find Words Containing Character
// Leetcode: https://leetcode.com/problems/find-words-containing-character/description/

var findWordsContaining = function (words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
};
