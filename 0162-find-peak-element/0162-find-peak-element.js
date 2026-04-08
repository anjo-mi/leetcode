/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const mid = Math.floor((nums.length - 1) / 2);
    if (mid === 0 && mid === nums.length - 1) return mid;
    const curr = nums[mid];
    const next = nums[mid+1];
    const prev = nums[mid-1];
    if (mid === 0 && curr > next) return mid;
    if (mid === nums.length - 1 && curr > prev) return mid;
    if (curr > next && curr > prev) return mid;

    if (next > curr) return mid + 1 + findPeakElement(nums.slice(mid+1));
    if (prev > curr) return findPeakElement(nums.slice(0,mid));
};