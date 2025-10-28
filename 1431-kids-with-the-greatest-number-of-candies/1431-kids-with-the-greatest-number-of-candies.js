/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extra) {
    const fattestKid = Math.max(...candies);
    return candies.map(qty => qty + extra >= fattestKid);
};

/*
Number-Array, Number

were returning a Boolean-Array

find + store the largest quantity in the array
map candies array -> an evaluation of whether or not adding the second parameter to the element, makes it greater than or equal to the largest element (equal counts as the problem states multiple kids can have the largest quantity)
*/