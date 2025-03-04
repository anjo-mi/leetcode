/*
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const low = nums.filter(num => num < pivot);
    const equal = nums.filter(num => num === pivot);
    const high = nums.filter(num => num > pivot);
    return [...low,...equal,...high];
};