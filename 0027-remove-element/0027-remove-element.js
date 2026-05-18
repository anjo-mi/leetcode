/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0 ; i < nums.length ; i++){
        if (val === nums[i]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
    // let i = 0, j = nums.length - 1;
    // while (i < j){
    //     while (nums[i] !== val && i < j) i++;
    //     while (nums[j] === val && i < j) j--;
    //     if (i < j) [nums[i],nums[j]] = [nums[j],nums[i]];
    //     i++;
    //     j--;
    // }
    // let count = 0;
    // while (nums[count] !== val && count < nums.length) count++;
    // nums.splice(count);
    // return count;
};