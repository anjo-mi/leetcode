function wordBreak(s: string, dict: string[], memo:Record<string,boolean> = {}): boolean {
    if (!s.length) return true;
    if (s in memo) return memo[s];
    const res:boolean[] = [];
    for (const word of dict){
        if (s.startsWith(word)){
            if ( wordBreak(s.slice(word.length),dict,memo) ) return memo[s] = true;
        }
    }
    return memo[s] = false;
};