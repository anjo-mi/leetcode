function productExceptSelf(nums: number[]): number[] {
    if (nums.includes(0)){
        const prod = nums.reduce((a,el) => a *= el === 0 ? 1 : el, 1);
        const ind = nums.findIndex(el => el === 0);
        nums[ind] = prod;
        if (nums.includes(0)) return nums.map(el => 0);
        return nums.map((el,i) => i === ind ? el : 0);
    }else{
        const prod = nums.reduce((a,el) => a *= el, 1);
        return nums.map(el => prod / el);
    }
};