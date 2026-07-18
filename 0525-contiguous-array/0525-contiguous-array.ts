function findMaxLength(nums: number[]): number {
    const counts:Record<string,number> = {'0':0, '1':0};
    const arr:number[] = [0];
    let max:number = 0;
    for (const num of nums){
        counts[num]++;
        arr.push(counts['0'] - counts['1']);
    }
    const compares:Record<string,number> = {};
    for (let i = 0 ; i< arr.length ; i++){
        const diff = arr[i];
        if (diff in compares) max = Math.max( i - compares[diff] , max );
        else compares[diff] = i;
    }
    return max;
};

/**
counts { 0: 0 , 1 : 0}
const arr = [];
max = 0;
every num, increment our count, push(counts[0] - counts[1])
const extras = {};
for every diff of arr
    if (diff in extras) max = Math.max(extras[diff] - i, max);
    else extras[diff] = i;
return max;
 */