function fourSum(nums: number[], target: number, length:number = 4): number[][] {
    if (!length) return target ? [] : [[]];
    if (nums.length < length) return [];
    const set = new Set();
    const num = nums[0];
    const additives = []
    const remsWith = fourSum(nums.slice(1), target - nums[0], length-1);
    for (const rem of remsWith){
          const valid = [nums[0], ...rem].sort((a,b) => a - b);
          if (!set.has(valid.toString())){
              set.add(valid.toString());
              additives.push(valid);
          }
        }
    const remsWithout = fourSum(nums.slice(1),target,length);
    for (const rem of remsWithout){
        const valid = rem.sort((a,b) => a - b);
        if (!set.has(valid.toString())){
            set.add(valid.toString());
            additives.push(rem);
        }
    }
    return additives;
};