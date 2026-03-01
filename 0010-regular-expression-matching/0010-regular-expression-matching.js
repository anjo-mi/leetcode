/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// s =
// "mississippi"
// p =
// "mis*is*p*."
var isMatch = function(s, p, i = 0, j = 0) {
    if (j === p.length) return i === s.length;
    const currChar = s[i];
    const regexChar = p[j];
    const regexMult = p[j+1];
    if ((currChar !== regexChar && regexChar !== '.' && regexMult !== '*')) return false;

    if ((regexChar === currChar || regexChar === '.') && regexMult !== '*'){
        return isMatch(s,p,i+1,j+1);
    }

    if (regexMult === '*' && regexChar !== '.' && currChar === regexChar){
        const newJ = j + 2;
        let tempI = i + 1;
        while (s[tempI] === currChar) tempI++;
        for (let ind = i; ind <= tempI; ind++){
            if (isMatch(s,p,ind,newJ)) return true;
        }
    }else if (regexMult === '*' && regexChar !== '.'){
        const newJ = j + 2;
        let tempI = i;
        while (s[tempI] === regexChar) tempI++;
        for (let ind = i; ind <= tempI; ind++) {
            if (isMatch(s, p, ind, newJ)) return true;
        }
    }else if (regexMult === '*'){
        const newJ = j + 2;
        let tempI = s.length;
        for (let ind = i; ind <= tempI; ind++){
            if (isMatch(s,p,ind,newJ)) return true;
        }
    }
    return false;
};


/**
 * set up i,j = 0 as additional params
 * BREAKING CONDITION: i === s.length && j === p.length -> return true
 * get: p[j] p[j+1] s[i]
 * 
 * if p[j] !== s[i] (&& p[j] !== '.' && p[j+1] !== '*') return false
 * 
 * if ((p[j] === s[i] || p[j] === '.') && p[j+1] !== '*')
 *  return isMatch(s,p,i+1,j+1);
 * 
 * 
 * if p[j+1] === '*' && p[j] !== '.'
 * j++
 * let tempI = i;
 * while (s[tempI] === s[i]) tempI++;
 * for let ind = i ; ind <= tempI ; ind++
 *   if: isMatch(s,p,ind,j+1) -> return true
 * 
 * return false;
 * 
 * 
 */