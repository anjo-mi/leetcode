const checkPal = (i,j,str) => {
    while (i >= 0 && j <= str.length && str[i] === str[j]){
        i--;
        j++;
    }
    return str.slice(i+1,j);
}

var longestPalindrome = function(s) {
    let longest = '';
    for (let i = 0 ; i < s.length ; i++){
        const checkOdd = checkPal(i,i,s);
        const checkEven = checkPal(i,i+1,s);
        const longer = checkOdd.length >= checkEven.length ? checkOdd : checkEven;
        longest = longest.length >= longer.length ? longest : longer;
    }
    return longest;
};
