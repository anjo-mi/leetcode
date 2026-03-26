function isValid(s: string): boolean {
    const opens = {'(' : ')','{' : '}','[' : ']',};
    const closes = {')' : '(','}' : '{',']' : '[',};
    const stack = [];
    for (const char of s){
        if (char in opens) stack.push(char);
        if (char in closes){
            const openCheck = stack.pop();
            if (openCheck !== closes[char]) return false;
        }
    }
    return !stack.length;
};