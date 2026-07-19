function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a-b);
    const res:number[][] = [];

    for (let i = 0 ; i < nums.length ; i++){
        if (nums[i] === nums[i-1]) continue;
        if (nums[i] > 0) break;

        let l = i + 1;
        let h = nums.length - 1;
        while (l < h){
            const sum = nums[i] + nums[l] + nums[h];
            if (sum < 0) l++;
            else if (sum > 0) h--;
            else{
                res.push([nums[i],nums[l],nums[h]]);
                while (l < h && nums[l] === nums[l+1]) l++;
                while (l < h && nums[h] === nums[h-1]) h++;
                l++;
                h--;
            }
        }
    }
    return res;
};
    // const res = new Set<string>();
    // for (let i = 0 ; i < nums.length ; i++){
    //     for (let j = i + 1 ; j < nums.length ; j++){
    //         for (let k = j + 1 ; k < nums.length ; k++){
    //             const [a,b,c]: [number,number,number] = [nums[i] , nums[j] , nums[k]]
    //             if (a + b + c === 0) res.add([a,b,c].sort().join(';'));
    //         }
    //     }
    // }
    // return Array.from(res).map(el => el.split(';').map(Number));
    // ------------------------------------------------------------
    // const res:Set<string> = new Set();
    // for (let i = 0 ; i< nums.length ;i++){
    //     const target = -nums[i];
    //     const seen:Set<number> = new Set();
    //     for (let j = i + 1 ; j < nums.length ; j++){
    //         const num = nums[j];
    //         const diff = target - num;
    //         if (seen.has(diff)) {
    //             res.add( [nums[i],num,diff].sort().toString() )
    //             continue;
    //         };
    //         seen.add(num);
    //     }
    // }
    // return Array.from(res).map(r => r.split(',').map(Number));