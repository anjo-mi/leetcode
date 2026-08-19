function findWords(words: string[]): string[] {
    const rows:Record<string,Set<string>> = {
        "top": new Set<string>("qwertyuiop"),
        "mid": new Set<string>("asdfghjkl"),
        "low": new Set<string>("zxcvbnm"),
    };
    const ws = words.map(word => word.split(''));
    const res:string[] = [];
    for (const word of ws){
        if (word.every(char => rows["top"].has(char.toLowerCase()))) res.push(word.join(''));
        if (word.every(char => rows["mid"].has(char.toLowerCase()))) res.push(word.join(''));
        if (word.every(char => rows["low"].has(char.toLowerCase()))) res.push(word.join(''));
    }
    return res;
};