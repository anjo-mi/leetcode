/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min = Math.max(...nums),
        mid = min;

    for (const num of nums){
        if (num <= min) min = num;
        else if (num <= mid) mid = num;
        else return true;
    }
    return false;
};

/*

*/