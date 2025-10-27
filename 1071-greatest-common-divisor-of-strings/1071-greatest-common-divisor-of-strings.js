/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const canSlice = (slicer, min,max) =>{
    const multSm = min.length / slicer.length;
    const multLg = max.length / slicer.length;
    if (!Number.isInteger(multSm) || !Number.isInteger(multLg)) return false;
    return slicer.repeat(multSm) === min && slicer.repeat(multLg) === max;
}

var gcdOfStrings = function(str1, str2) {
    const min = str1.length < str2.length ? str1 : str2;
    const max = min === str1 ? str2 : str1;
    let maxSlicer = '';
    let i = 1;
    while (i <= min.length){
        if (canSlice(min.slice(0,i), min,max)) maxSlicer = min.slice(0,i);
        i++;
    }
    return maxSlicer;
};

/*
make a function to test if the word can be repeated any number of times to make both words
let min and max be based off of lengths of the two words
start with i = 1
slice the shorter word
test w/ function from 11
if pass and longer than previous long answer, reset long answer
*/