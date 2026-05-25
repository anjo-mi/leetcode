/**
 * @param {string} s
 * @return {number}
 */

// const isValid = s => {
//     const stack = [];
//     for (const char of s){
//         if (char === '(') stack.push('(');
//         if (char === ')'){
//             if (!stack.length) return false;
//             else stack.pop();
//         }
//     }
//     return stack.length === 0;
// }

// var longestValidParentheses = function(s,i=0,j=s.length,max=-1,memo ={}) {
//     const k = i+';'+j;
//     if (k in memo) return max = memo[k] = Math.max(max,memo[k]);
//     if (isValid(s.slice(i,j))) return max = memo[k] = Math.max(max,j-i);
//     memo[k] = Math.max(
//         longestValidParentheses(s,i+1,j,max,memo),
//         longestValidParentheses(s,i,j-1,max,memo)
//     );
//     return memo[k] = Math.max(max,memo[k]);
// };

var longestValidParentheses = function(s) {
    const stack = [-1];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
};