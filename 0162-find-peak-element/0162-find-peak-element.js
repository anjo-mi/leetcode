/**
 * @param {number[]} nums
 * @return {number}

returning index of an element thats greater than its neighbors

first and last elements are valid solutions

i = 0

if nums[i] > next && nums[i] > prev return i



[1,2,1,0,1,2,1] => -1 or any index
[1,1,1,3,4,2,1,3,5,6,4]

const i = Math.floor((nums.length - 1 - currentIndex) / 2);
let prev = -Infinity
let next = -Infinity
-> if i !== 0 or prev = nums [i-1]
if i !== length of the array - 1
    next = nums[i+1]

if next < i slice(i)

i = 0

 */
//  [1,2,1,3,5,6,4]
// [-1,-1,-1]
    // for (let i = 0 ; i< nums.length ; i++){
    //     let prev = -Infinity,
    //         next = -Infinity;
    //     if (i !== 0) prev = nums[i-1];
    //     if (i !== nums.length-1) next = nums[i+1];

    //     if (nums[i] > prev && nums[i] > next) return i;
    // }
    // return -1;
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