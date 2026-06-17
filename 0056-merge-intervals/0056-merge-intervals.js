/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    if (intervals.length === 1) return intervals;
    intervals.sort((a,b) => a[0] -b[0]);
    const newInts = [];
    let start = intervals[0][0];
    for (let i = 0 ; i < intervals.length ; i++){
        let end = intervals[i][1];
        if (i === intervals.length - 1){
            newInts.push(intervals[i]);
            break;
        }
        while(i < intervals.length && intervals[i][0] <= end) {
            end = Math.max(intervals[i][1],end);
            i++;
        }
        i--;
        newInts.push([start,end]);
        console.log({start,end,i})
        start = i < intervals.length - 1 ? intervals[i+1][0] : null;
    }
    return newInts;
};
