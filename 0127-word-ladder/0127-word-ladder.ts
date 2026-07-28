function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const words = new Set(wordList);
    if (!words.has(endWord)) return 0;
    const patterns = new Map<string, string[]>();
    const addWord = (w: string) => {
        for (let i = 0; i < w.length; i++) {
            const p = w.slice(0, i) + '*' + w.slice(i + 1);
            if (!patterns.has(p)) patterns.set(p, []);
            patterns.get(p)!.push(w);
        }
    };
    for (const w of words) addWord(w);
    if (!words.has(beginWord)) addWord(beginWord);
    const visited = new Set<string>([beginWord]);
    let queue: string[] = [beginWord];
    let level = 1;
    while (queue.length) {
        const next: string[] = [];
        for (const w of queue) {
            if (w === endWord) return level;
            for (let i = 0; i < w.length; i++) {
                const p = w.slice(0, i) + '*' + w.slice(i + 1);
                for (const nb of patterns.get(p) ?? []) {
                    if (!visited.has(nb)) {
                        visited.add(nb);
                        next.push(nb);
                    }
                }
            }
        }
        queue = next;
        level++;
    }
    return 0;
}

// const getCounts = (s:string):Record<string,number> => {
//     const c:Record<string,number> = s.split('').reduce((a,el) => {
//         a[el] = (a[el] || 0) + 1
//         return a;
//     }, {});
//     return c;
// }

// const hasOneDiff = (c1:string,c2:string):boolean=> {
//     let count:number = 0;
//     for (let i = 0 ; i < c1.length ; i++){
//         if (c1[i] !== c2[i]) count++;
//         if (count > 1) return false;
//     }
//     return (count === 1 && c1.length === c2.length) || (count === 0 && Math.abs(c1.length - c2.length) === 1);
// }

// const getDists = (w:string,end:string,connections:Record<string,string[]>,steps:Record<string,number>,v= new Set<string>()):number => {
//     if (w === end) return steps[w] = 1;
//     if (!connections[w].length || v.has(w)) return Infinity;
//     v.add(w);
//     const allPaths:number[] = connections[w].map(word => getDists(word,end,connections,steps,v) + 1);
//     v.delete(w);
//     return steps[w] = w in steps ?  Math.min(...allPaths,steps[w]) : Math.min(...allPaths);
// }

// function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
//     if (!wordList.includes(endWord)) return 0;
//     if (!wordList.includes(beginWord)) wordList.push(beginWord);
//     const mapOfCounts:Record<string,Record<string,number> > = wordList.reduce((a,word) => {
//         a[word] = getCounts(word);
//         return a;
//     }, {});
//     const connections:Record<string,string[]> = {};
//     for (let i = 0 ; i < wordList.length ; i++){
//         const w1 = wordList[i];
//         if (!(w1 in connections)) connections[w1] = [];
//         for (let j = i + 1 ; j < wordList.length ; j++){
//             const w2 = wordList[j];
//             if (!(w2 in connections)) connections[w2] = [];
//             if (hasOneDiff(w1,w2)){
//                 connections[w1].push(w2);
//                 connections[w2].push(w1);
//             }
//         }
//     }
//     for (const word in connections) connections[word] = Array.from(new Set(connections[word]));
//     const steps:Record<string,number> = {};
//     for (const word of wordList) getDists(word,endWord,connections,steps);
//     return !steps[beginWord] ? 0 : Number.isFinite(steps[beginWord]) ? steps[beginWord] : 0;
// };