// 771. Jewels and Stones
// Leetcode: https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function (jewels, stones) {
  let set = new Set(jewels);
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) count++;
  }

  return count;
};

// Time Complexity - O(m+n)
// Space Complexity - O(m) ->  We store all jewels in a hash set.

//  However, the problem states that both "jewels and stones consist of only English letters".Since there are only 26 lowercase + 26 uppercase letters, set can store at most 52 unique characters.

//so space complexity is O(52) and 52 is constant.
// So, the space complexity can be considered O(1).
