function isValid(s: string): boolean {
    const opens = new Set<string>('({[');
    const closes:Record<string,string> = {  ')':'(' , ']':'[' , '}':'{'  };
    const stack:string[] = [];
    for (const char of s){
        if (opens.has(char)){
            stack.push(char);
        }
        if (char in closes){
            const end = stack.pop();
            if (!end || end !== closes[char]) return false;
        }
    }
    return !stack.length;
};