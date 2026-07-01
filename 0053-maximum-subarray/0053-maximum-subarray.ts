function maxSubArray(nums: number[]): number {
    // if (nums.length === 1) return nums[0];
    // let max = -999999999;
    // let res:number[] = [];
    // for (let i = 0 ; i < nums.length ; i++){
    //     for (let j = i + 1 ; j <= nums.length ; j++){
    //         const part = nums.slice(i,j);
    //         const count = part.reduce((a,el) => a += el, 0);
    //         if (count > max){
    //             max = count;
    //             res = part;
    //         }
    //     }
    // }
    // return max;
    let max = nums[0];
    let maxEnd = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEnd = Math.max(nums[i], maxEnd + nums[i]);
        max = Math.max(max, maxEnd);
    }

    return max;
};