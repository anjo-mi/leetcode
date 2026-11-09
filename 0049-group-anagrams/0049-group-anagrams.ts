function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 1) return [strs];
    const anis:Record<string,string[]> = strs.reduce((a,el) => {
        const sorted = el.split('').sort().join('');
        if (!(sorted in a)) a[sorted] = [];
        a[sorted].push(el);
        return a;
    }, {} as Record<string,string[]>)
    return Object.values(anis);
};