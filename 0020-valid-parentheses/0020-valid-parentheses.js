/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const opens = {'(': ')' , '[': ']' , '{': '}'};
    const close = {')': '(' , ']': '[' , '}': '{'};
    let stack = [];
    for (const char of s){
        if (char in opens) stack.push(char);
        if (char in close){
            if (stack.pop() !== close[char]) return false;
        }
    }
    return !stack.length;
};