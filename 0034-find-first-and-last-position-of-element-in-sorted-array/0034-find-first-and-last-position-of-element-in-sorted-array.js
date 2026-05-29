/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target,i=0) {
    if (!nums.length) return [-1,-1];
    const middle = Math.floor(nums.length / 2);
    if (nums[middle] > target) return searchRange(nums.slice(0,middle),target,i);
    if (nums[middle] < target) return searchRange(nums.slice(middle + 1),target,middle + 1 + i);
    let [l,m] = [middle-1,middle+1];
    while (nums[l] === nums[middle]) l--;
    while (nums[m] === nums[middle]) m++;
    return [l+1+i,m-1+i];
};

/**
pick a middle point in the array
- if the number at that index is greater than the target
    - recurse on the array sliced to that point (0,middle)
- if the number at that index is less than the target
    - recurse on the array sliced at that point (middle)
- if the number equals the target
    - set two values l,m = middle - 1,middle+1
    - while nums[l] === nums[middle] l--
    - while nums[m] === nums[middle] m++
    return [l+1,m-1]
 */