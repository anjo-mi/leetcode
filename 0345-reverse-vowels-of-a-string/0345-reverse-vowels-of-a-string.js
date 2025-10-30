/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const stack = [];
    const vowels = new Set('aeiou');
    for (const char of s) if (vowels.has(char.toLowerCase())) stack.push(char);
    return s.split('').map(char => vowels.has(char.toLowerCase()) ? stack.pop() : char).join('');
};

/*
take in a string (up and low case)
in truth, nothing else matters except the vowels

set of low case vowels
array of empty
iterate thru string once to grab all vowels
    place them in the array
split and map the string, where each time a char is in set its array pop()

*/