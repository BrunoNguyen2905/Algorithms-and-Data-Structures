// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //FIRST SOLUTION
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');

    //  str = String(str).split('').sort().reverse().join('');
    //  return str;

    // return str.split('').reverse().join('');

    // //SECOND SOLUTION
    // let reversed = '';
    // //for(var i=0; i < str.length; i ++){ dont use this old one
       
    // for (let character of str){
    //     reversed = character + reversed;
    // }
    // return reversed;
    
    //THIRD SOLUTION
    //debugger; // need to call function manually so that it will invoke the reverse function ==> will impress ur interviewer
    return str.split('').reduce((rev, char) => char + rev, '');
}
reverse("abcde");

    
module.exports = reverse;
