/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums.length || target < nums[0]) return 0;
    if (nums[nums.length-1] < target) return nums.length;
    let i = 0,
        j = nums.length - 1;
    while (i <= j){
        if (j - i === 1 && nums[i] < target && nums[j] > target) return j;
        const mid = Math.floor((i+j) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid-1] < target && nums[mid+1] > target){
            if (nums[mid] >= target) return mid;
            if (nums[mid] < target) return mid + 1;
        }
        if (nums[mid-1] >= target) j = mid - 1;
        if (nums[mid+1] <= target) i = mid + 1;
    }
};