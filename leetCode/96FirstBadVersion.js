// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/
/*
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/*
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /*
   * @param {integer} n Total versions
   * @return {integer} The first bad version

   1 2 3 4 5 6 7 8 9 10 x x
   */
  return function(n) {
      let start = 1;
      let end = n;
      let mid = Math.floor((start + end) / 2);

      while(start <= end) {
          if(isBadVersion(mid)) {
              if(!isBadVersion(mid - 1)) return mid;
              end = mid - 1;
          } else {
              start = mid + 1;
          };
          mid = Math.floor((start + end) / 2);
      }
  }
};

// Time complexity O(log(n))
// Space complexity O(1)
// Runtime beats 87.19 % of javascript submissions.
// Memory usage beats 72.57 % of javascript submissions.