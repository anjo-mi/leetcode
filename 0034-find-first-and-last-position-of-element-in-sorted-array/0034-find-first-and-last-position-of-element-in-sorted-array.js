/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.length) return [-1,-1];
    let l = 0, r = nums.length - 1;
    while (l <= r){
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) l = mid + 1;
        else if (nums[mid] > target) r = mid - 1;
        else{
            l = mid - 1;
            r = mid + 1;
            while (nums[l] === nums[mid]) l--;
            while (nums[r] === nums[mid]) r++;
            return [l+1,r-1];
        }
    }
    return [-1,-1];
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