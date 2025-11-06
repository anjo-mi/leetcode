/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const addends = {};
    for (let i = 0; i < nums.length ; i++){
        const potential = target - nums[i];
        if (potential in addends) return [addends[potential] , i];
        addends[nums[i]] = i;
    }
    return [null,null];
};