const getCounts = (word:string):Record<string,number> => {
    return word.split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    }, {} as Record <string,number>)
}

function commonChars(words: string[]): string[] {
    const counts = getCounts(words[0]);
    for (const word of words){
        const count = getCounts(word);
        for (const char in counts){
            if (!(char in count)) delete counts[char];
            counts[char] = Math.min(counts[char], count[char]);
        }
    }
    let str = '';
    for (const char in counts){
        str += char.repeat(counts[char]);
    }
    return str.split('');
};