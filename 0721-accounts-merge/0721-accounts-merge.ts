function accountsMerge(accounts: string[][]): string[][] {
    const encountered = new Set<string>();
    let res: string[][] = [];
    for (const acc of accounts) {
        if (encountered.has(acc[0])) {
            const sameName = res.filter(a => a[0] === acc[0]);
            const others = res.filter(a => a[0] !== acc[0]);
            const overlaps = (m: string[]) =>
                acc.slice(1).some(email => m.slice(1).includes(email));
            const matched = sameName.filter(overlaps);
            const unmatched = sameName.filter(m => !overlaps(m));
            const merged = [
                acc[0],
                ...Array.from(new Set([...acc.slice(1), ...matched.flatMap(m => m.slice(1))]))
            ];
            res = [...others, ...unmatched, merged];
        } else {
            encountered.add(acc[0]);
            res.push([acc[0], ...Array.from(new Set(acc.slice(1)))]);
        }
    }
    return res.map(a => [a[0], ...a.slice(1).sort()]);
}