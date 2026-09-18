function findTheDifference(s: string, t: string): string {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    console.log({s,t})
    for (let i = 0 ; i < Math.max(s.length, t.length) ; i++){
        if (s[i] !== t[i]) return t[i];
    }
    return "these are the same dude";
};