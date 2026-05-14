/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// nums = [11,2,15,7]  target = 9

var twoSum = function(nums, target) {
    const seen = {};
    for (let i = 0 ; i < nums.length ; i++){
        const needed = target - nums[i];
        if (needed in seen) return [i, seen[needed]];
        seen[nums[i]] = i;
    }
    return [-1,-1];
};