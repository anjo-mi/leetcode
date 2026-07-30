function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0]);
    const res:number[][] = [];
    for (let i = 0 ; i < intervals.length ; i++){
        let [start,end] = intervals[i];
        let j = i + 1;
        if (j >= intervals.length){
            res.push([start,end]);
            break;
        }
        let [nstart,nend] = intervals[j];
        while (j < intervals.length && end >= nstart){
            end = Math.max(end,nend,nstart);
            start = Math.min(start,nstart,nend);
            j++;
            if (j <intervals.length) [nstart,nend] = intervals[j];
        }
    res.push([start,end]);
    i = j - 1;
    }
    return res;
};