const isMatch = (a:Record<string,number>,b:Record<string,number>):boolean =>{
    for (const char in a) if (!(char in b) || a[char] !== b[char]) return false;
    return true;
}

function findAnagrams(s: string, p: string): number[] {
    const pcnt = p.split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    }, {} as Record<string,number>);
    const scnt = s.slice(0,p.length).split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    }, {} as Record<string,number>);

    const res:number[] = [];

    if (isMatch(scnt,pcnt)) res.push(0)
    for (let i = 0 ; i < s.length - p.length ; i++){
        const curr = s[i];
        const next = s[i+p.length];
        scnt[curr]--;
        if (scnt[curr] === 0) delete scnt[curr];
        scnt[next] = (scnt[next] || 0) + 1;
        if (isMatch(scnt,pcnt)) res.push(i+1);
    }
    
    return res;
};