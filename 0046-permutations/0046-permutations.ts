function permute(nums: number[]): number[][] {
    if (!nums.length) return [[]];
    const res:number[][] = [];
    const front = nums[0];
    const rems = permute(nums.slice(1));
    for (const rem of rems){
        for (let i = 0 ; i <= rem.length ; i++){
            res.push([...rem.slice(0,i), front, ...rem.slice(i)]);
        }
    }
    return res;
};