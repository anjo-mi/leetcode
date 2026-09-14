const backspace = (s:string):string => s.slice(0,-1);

function backspaceCompare(s: string, t: string): boolean {
    let ns = '',
        nt = '';
    for (const char of s) ns = char === '#' ? backspace(ns) : ns + char;
    for (const char of t) nt = char === '#' ? backspace(nt) : nt + char;
    return ns === nt;
};