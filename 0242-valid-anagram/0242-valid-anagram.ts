const getCounts = (s:string): Record<string,number> => {
    return s.split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    }, {} as Record<string,number>)
}

function isAnagram(s: string, t: string): boolean {
    // return s.split('').sort().join('') === t.split('').sort().join('');
    const a = getCounts(s);
    const b = getCounts(t);
    for (const char in a) if (a[char] !== b[char]) return false;
    for (const char in b) if (a[char] !== b[char]) return false;
    return true;
};