/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(cites) {
    let papers = cites.length;
    while (papers){
        let count = 0;
        for (const cite of cites) if (cite >= papers) count++;
        if (count >= papers) return papers;
        papers--;
    }
    return papers;
};

/**
find the number of published papers
while that number is greater than 0
    if the number of papers with a val >= number >= number, return number
    otherwise number--

return number
 */