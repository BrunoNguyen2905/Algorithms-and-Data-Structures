// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//learn toString(), parseInt(), Math.sign()
//math.sign(-5) Output: -1
//Math.sign(1) Output: 1
//Math.sign(0) Output: 0   

function reverseInt(n) {
    let reversedInteger = n.toString().split('').reverse().join('');
    return parseInt(reversedInteger) * Math.sign(n);
}

module.exports = reverseInt;
