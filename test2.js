function findMissingNumber(nums) {
  const n = nums.length;
  // Check constraint: 0 <= nums[i] <= n
  if (nums.some((num) => num < 0 || num > n)) {
    console.error(
      "Error: Constraint violated - All numbers in the array must be in the range [0, n].",
    );
    return null; // or handle the error in an appropriate way
  }
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
// Example usage:
const nums1 = [3, 0, 1];
console.log(findMissingNumber(nums1)); // Output: 2
const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums2)); // Output: 8
const nums3 = [0, 1];
console.log(findMissingNumber(nums3)); // Output: 2
const nums4 = [10, 9, 2, 4, 3, 5, 6, 1, 8, 0, 16];
console.log(findMissingNumber(nums4)); // Output: error