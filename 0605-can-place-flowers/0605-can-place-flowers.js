/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const maxPlots = (arr,i=0,memo={}) => {
        if (i in memo) return memo[i];
        if (i >= arr.length) return 0;
        if (arr[i]) return memo[i] = maxPlots(arr,i+2,memo);
        else{
            if (!arr[i-1] && !arr[i+1]) return memo[i] = 1 + maxPlots(arr,i+2,memo);
            else return memo[i] = maxPlots(arr,i+1,memo);
        }
    }
    const maxNewPlots = maxPlots(flowerbed);
    return maxNewPlots >= n;
};

/*
array populated of Numbers x = 0 || x = 1
maxPlots = () =>{
add params:fbed, i:Number + memo {}
if (i >= fbed length) return 0;
if (fbed[i]) return maxPlots(fbed,i+2,memo)
if (!fbed[i]) {
    if (!fbed[i-1] && !fbed[i+1]) return 1 + maxPlots(fbed,i+2,memo)
    else return maxPlots(fbed,i+1,memo)
}
input array to get value of maxPlots
compare to n
}
*/