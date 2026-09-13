function wordBreak(s: string, dict: string[], i = 0 , memo:Record<string,boolean> = {}): boolean {
    if (i === s.length) return true;
    if (i >   s.length) return false;
    if (i in memo) return memo[i];
    const rems:string = s.slice(i);
    return memo[i] = dict.some(el => {
        return rems.startsWith(el) && wordBreak(s,dict,i+ el.length, memo);
    });
};