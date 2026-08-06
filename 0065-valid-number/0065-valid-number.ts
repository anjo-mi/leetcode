function isNumber(s: string): boolean {
    if (s[0] === '-' || s[0] === '+') s = s.slice(1);
    if (s[0] === '-' || s[0] === '+') return false;
    if (s[0] === '.' && s.length === 1) return false;
    for (let i = 1 ; i < s.length ; i++){
        const char = s[i];
        const prev = s[i-1].toLowerCase();
        if ((char === '+' || char === '-') && prev !== 'e') return false;
    }
    const counts = s.split('').reduce((a,el,i) => {
        if (el === '.'
         || el === '+' 
         || el === '-' 
         || el.toLowerCase() === 'e'
        ){
            if (!a[el.toLowerCase()]){
                a[el.toLowerCase()] = [0];
            }
            a[el.toLowerCase()][0]++;
            if (a[el.toLowerCase()].length === 1) a[el.toLowerCase()].push(i);
        }
        return a;
    }, {} as Record<string,number[]>)
    for (const char in counts) if (counts[char][0] > 1) return false;
    if (Object.keys(counts).filter(el => ['+','-','.','e'].includes(el.toLowerCase())).length === s.length) return false;
    if ('e' in counts && (counts['e'][1] === 0 || counts['e'][1] === s.length - 1)) return false;
    if ('e' in counts && '.' in counts && counts['e'][1] === 1 && counts['.'][1] === 0) return false;
    if ('e' in counts && '.' in counts && counts['e'][1] < counts['.'][1]) return false;
    if ('+' in counts && '-' in counts) return false;
    if ('+' in counts && counts['+'][1] === s.length  - 1) return false;
    if ('-' in counts && counts['-'][1] === s.length  - 1) return false;
    if ('e' in counts && '+' in counts && counts['+'][1] < counts['e'][1]) return false;
    if ('e' in counts && '-' in counts && counts['-'][1] < counts['e'][1]) return false;
    const valid = new Set<string>('1234567890.+-eE');
    return s.split('').every(char => valid.has(char));
};