const countInstances = (a,el) => {
    a[el.toString()] = (a[el.toString()] || 0) + 1;
    return a;
}

function intersect(nums1: number[], nums2: number[]): number[] {
    const res:number[] = [];
    const t1 = nums1.reduce(countInstances, {} as Record<string,number>);
    const t2 = nums2.reduce(countInstances, {} as Record<string,number>);
    for (const num in t1){
        if (num in t2){
            let min = Math.min(t1[num],t2[num]);
            while (min){
                res.push(+num);
                min--;
            }
        }
    }
    return res;
};