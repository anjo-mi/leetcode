/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums.length) return [[]];
    const first = nums[0];
    const rems = permute(nums.slice(1));
    const perms = [];
    for (const rem of rems){
        for (let i = 0 ; i<= rem.length ; i++){
            perms.push([...rem.slice(0,i), first, ...rem.slice(i)]);
        }
    }
    return perms;
};

/**
if !nums.length return [[]];
iterate through nums
at each point take out the index that we're at
get remaining perms by calling permute(nums.slice(1))
for every remain
    for (let i = 0 ; i <= rem.length ; i++){
        perms.push(...rem.slice(0,i),first,...rem.slice(i));
    }
 */