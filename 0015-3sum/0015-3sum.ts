const convertToSortedString = (arr:number[]):string => {
    return String(arr.sort((a,b) => a-b));
}

function threeSum(nums: number[]): number[][] {
    const poss = [];
    nums.sort((a,b) => a-b);
    for (let i = 0 ; i < nums.length ; i++){
        if (i > 0 && nums[i] === nums[i-1]) continue;
        const tar = -nums[i];
        let left = i+1,
            right = nums.length-1;
        while (left < right){
            const currSum = nums[left] + nums[right];
            if (currSum === tar){
                poss.push([nums[i],nums[left], nums[right]])
                while (left < right && nums[left] === nums[left+1]) left++;
                while (left < right && nums[right] === nums[right-1]) right--;
                left++;
                right--;
            }else if(currSum < tar) left++;
            else right--;
        }
    }
    return poss;
};