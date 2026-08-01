function lengthOfLongestSubstring(s: string): number {
    let max: number = 0;
    const seen = new Map<string,number>();
    for (let i = 0 ; i < s.length ; i++){
        const char = s[i];
        if (seen.has(char)){
            const ind = seen.get(char);
            for (const item of seen){
                const [key,val]:[string,number] = item;
                if (val <= ind) seen.delete(key);
            }
        }
        seen.set(char,i);
        max = Math.max(seen.size,max);
    }
    return max;
};