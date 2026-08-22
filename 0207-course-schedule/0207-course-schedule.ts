const hasEnds = (crlm:Record<string,number[]>, ends:Record<string,boolean>, course:string, v = new Set<string>()):boolean | void => {
    if (course in ends) return ends[course];
    if (!crlm[course].length) return ends[course] = true;
    if (v.has(course)) return ends[course] = false;
    v.add(course);
    ends[course] = crlm[course].every(crs => hasEnds(crlm,ends,crs.toString(),v));
    v.delete(course);
    return ends[course];
}

function canFinish(courses: number, preqs: number[][]): boolean {
    const crlm:Record<string,number[]> = {};
    for (const [a,b] of preqs){
        if (!(a in crlm)) crlm[a] = [];
        if (!(b in crlm)) crlm[b] = [];
        crlm[a].push(b);
    }
    const ends:Record<string,boolean> = {};
    for (const course in crlm){
        hasEnds(crlm,ends,course)
    }
    return Object.values(ends).every(Boolean);
};