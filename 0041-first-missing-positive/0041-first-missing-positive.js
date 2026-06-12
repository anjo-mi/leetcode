/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const ints = nums.reduce((a,el) => {
        if (el > 0) a[el] = el;
        return a;
    },[])
    let i = 1;
    while (ints[i]) i++;
    return i;
};