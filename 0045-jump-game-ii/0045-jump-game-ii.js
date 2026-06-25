/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function(nums,i=0,jumps=0) {
//     let num = nums[i];
//     let min = Infinity;
//     if (i >= nums.length - 1) return = jumps;
//     if (num === 0) return Infinity;
//     while (num){
//         min = Math.min(
//             jump(nums,i+num,jumps+1),
//             min
//         );
//         num--;
//     }
//     return min;
// };

var jump = function(nums) {
    let jumps = 0, end = 0, furthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        furthest = Math.max(furthest, i + nums[i]);
        if (i === end) {
            jumps++;
            end = furthest;
        }
    }
    return jumps;
};