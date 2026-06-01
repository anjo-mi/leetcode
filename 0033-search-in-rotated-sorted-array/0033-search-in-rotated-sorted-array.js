/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        const curr = nums[mid];
        const start = nums[i];
        const end = nums[j];
        if (curr === target) return mid;
        if (end === target) return j;
        if (start === target) return i;
        if (start < curr) {
            if (target >= start && target < curr) j = mid - 1;
            else i = mid + 1;
        } else {
            if (target > curr && target <= end) i = mid + 1;
            else j = mid - 1;
        }
    }
    return -1;
};
