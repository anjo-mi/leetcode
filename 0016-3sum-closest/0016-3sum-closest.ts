function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a,b) => a - b);
    let closestSum,
        closestDiff = Infinity;
    for (let i = 0 ; i < nums.length ; i++){
        let left = i + 1,
            right = nums.length - 1;
        while (left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < closestDiff){
                closestDiff = Math.abs(sum - target);
                closestSum = sum;
                if (sum === target) return closestSum;
            }
            if (sum < target) left++;
            else if (sum > target) right--;
        }
    }
    return closestSum;
};