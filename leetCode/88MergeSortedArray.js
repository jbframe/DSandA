// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// Constraints:
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[i] <= 109

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?
const merge = function(nums1, m, nums2, n) {
  let i = 0; // index of nums1 to review
  let j = 0; // index of nums2 to review
  let result = [];
  while (i < m && j < m) {
    if (nums1[i] > nums2[j]) {
      result.push(nums2[j]);
      j++;
    } else {
      result.push(nums1[i]);
      i++
    }
    console.log(i, j, result)
  }
  if (i === m) {
    while (j < n) {
      result.push(nums2[j]);
      j++;
    }
    console.log(i, j, result)
  } else {
    while (i < m) {
      result.push(nums1[i]);
      i++;
    }
    console.log(i, j, result)
  }
  return result;
}

//Tests
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
console.log(merge(nums1, m, nums2, n)); // Expected Output: [1,2,2,3,5,6]

nums1 = [1]
m = 1
nums2 = []
n = 0
console.log(merge(nums1, m, nums2, n)); // Expected Output: [1]


// pointer solution>>>>>>>>.

// const merge = (nums1, m, nums2, n) => {
//   let left = m - 1
//   let right = n - 1
//   for (let i = nums1.length - 1; i >= 0; i--) {
//     if (right < 0) {
//       break
//     }
//     if (left >= 0 && nums1[left] > nums2[right]) {
//       nums1[i] = nums1[left--]
//     } else {
//       nums1[i] = nums2[right--]
//     }
//   }
// }