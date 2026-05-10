function removeDuplicates(nums: number[]): number {
    let i = 0;
    let curr:number;
    let removed = 0;
    while (i < nums.length){
        if (nums[i] === curr){
            nums.splice(i,1);
            removed++;
            continue;
        }
        curr = nums[i];
        i++;
    }
    const remaining:number = nums.length;
    nums.length = nums.length + removed;
    return remaining;
};