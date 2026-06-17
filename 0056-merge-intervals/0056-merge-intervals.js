/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const isMerged = (arr) => {
    for (let i = 0 ; i < arr.length - 1 ;i++){
        const end = arr[i][1];
        const nextStart = arr[i+1][0];
        if (end >= nextStart) return false;
    }
    return true;
}


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

/**
negatives are of no consequence
start <= end

sort the outer array by the first number
const newIntervals = [[1,6], [8,10], [8,18]];
iterate thru
for (let i = 1 ; i < intervals.length ; i++)

[[1,3],[2,6],[8,10],[9,18]]
    - track second number, compare to next's first number
    start = 1[start]
     1[end] >= 2[start]
     max(1[end] , 2[end])
     new End ^^
     push([start,newEnd])

     if 1[end] < 2[start]
     push(start,1[end])

 */