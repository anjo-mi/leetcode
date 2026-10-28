function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return '';
    let l = strs[0];
    for (const word of strs.slice(1)){
        let t = '';
        for (let i = 0 ; i < Math.max(l.length,word.length) ; i++){
            if (word[i] === l[i]) t += l[i];
            else break;
        }
        l = t;
    }
    return l;
};