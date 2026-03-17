function longestCommonPrefix(strs: string[]): string {
    let overallShared = '';
    if (!strs.length) return overallShared;
    overallShared = strs[0];
    for (let i = 1 ; i < strs.length; i++){
        const compared = strs[i];
        const min = Math.min(overallShared.length, compared.length);
        console.log({overallShared, min, compared})
        let thisShared = '';
        for (let j = 0 ; j < min ; j++){
            if (compared[j] !== overallShared[j]) break;
            thisShared += compared[j];
        }
        if (!thisShared) return thisShared;
        overallShared = thisShared;
    }
    return overallShared;
};