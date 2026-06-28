/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (!nums.length) return [[]];
    const perms = new Set();
    let first = nums[0];
    let remains = permuteUnique(nums.slice(1));
    for (const rem of remains){
        for (let i = 0 ; i <= rem.length ; i++){
            const added = [...rem.slice(0,i),first,...rem.slice(i)];
            perms.add(added.join(';'));
        }
    }
    return Array.from(perms).map(set => set.split(';').map(Number));
};