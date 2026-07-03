function merge(intervals: number[][]): number[][] {
    if (intervals.length === 1) return intervals;
    const arr:number[][] = [];
    for (let i = 0 ; i < intervals.length ; i++){
        if (i === intervals.length - 1){
            arr.push(intervals[i]);
            break;
        }
        let x = i + 1;
        let start = intervals[i][0];
        let end = intervals[i][1];
        let nextStart = intervals[x][0];
        let nextEnd = intervals[x][1];
        console.log({start,end,nextStart, nextEnd})
        while ((nextStart || nextStart === 0) && end >= nextStart && x < intervals.length){
            end = Math.max(end,nextEnd);
            x++;
            if (x < intervals.length){
                nextStart = intervals[x][0];
                nextEnd = intervals[x][1];
            }
        }
        arr.push([start,end]);
        i = x - 1;
    }
    return arr;
};

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const first = newInterval[0];
    let i = 0;
    while (first > intervals[i]?.[0]) i++;
    intervals.splice(i,0,newInterval);
    console.log({intervals});
    const merged = merge(intervals);
    console.log({merged});
    return merged;
};