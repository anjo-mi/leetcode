const nums:Record<string, string[]> = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
}

function letterCombinations(digits: string): string[] {
    const res:string[] = [];
    if (!digits.length) return res;
    const first = digits[0];
    const rems:string[] = letterCombinations(digits.slice(1));
    for (const letter of nums[first]){
        if (rems.length){
            for (const rem of rems){
                res.push(letter + rem);
            }
        }else res.push(letter);
    }
    return res;
};