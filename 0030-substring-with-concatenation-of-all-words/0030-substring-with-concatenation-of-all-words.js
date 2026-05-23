/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function(s, words) {
    if (!s.length || !words.length) return [];
    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    const wordCount = {};
    for (const w of words) wordCount[w] = (wordCount[w] || 0) + 1;
    const result = [];
    for (let i = 0; i <= s.length - totalLen; i++) {
        const seen = {};
        let j = 0;
        while (j < words.length) {
            const word = s.slice(i + j * wordLen, i + j * wordLen + wordLen);
            if (!wordCount[word]) break;
            seen[word] = (seen[word] || 0) + 1;
            if (seen[word] > wordCount[word]) break;
            j++;
        }   
        if (j === words.length) result.push(i);
    }
    return result;
};