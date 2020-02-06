// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//STRING DO NOT HAVE ACCESS TO EVERY HELPER(SUCH AS EVERY, REDUCE,FOREACH...).IT'S ONLY ARRAY

function palindrome(str) {
    // //THIS SOLUTION IS NOT IDEAL
    // return str.split('').every((char, i) => {
    //     return char === str[str.length -i -1] // boolean value
    // });

    //FIRST SOLUTION-- my solution //IDEAL
    // if(str.split('').reverse().join('') == str)
    //     return true;
    // else
    //     return false;
    // }

    //SECOND SOLUTION-- my solution
    // let reversed ='';
    // for(let character of str){
    //     reversed = character + reversed;
    // }
    // if(reversed == str) return true;
    // else return false;

    //THIRD SOLUTION-- from Author //IDEAL
    const reversed = str.split('').reverse().join('');

    return str === reversed // return boolean value 

}

module.exports = palindrome;
