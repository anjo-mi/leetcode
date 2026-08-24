const ops:Record<string,(a:string[]) => string> = {
    '+': (a:string[]) => (+a[0] + +a[1]).toString(),
    '-': (a:string[]) => (+a[0] - +a[1]).toString(),
    '*': (a:string[]) => (+a[0] * +a[1]).toString(),
    '/': (a:string[]) => {
        let quo = +a[0] / +a[1];
        quo = quo > 0 ? Math.floor(quo) : Math.ceil(quo);
        return String(quo);
    }
}

function evalRPN(tokens: string[]): number {
    let i = 0;
    while (tokens.length > 1){
        while(!(tokens[i] in ops)) i++;
        const replacement = ops[tokens[i]](tokens.slice(i-2,i+1));
        tokens.splice(i-2,3,replacement);
        i -= 2;
    }
    return Math.floor(+tokens[i]);
};