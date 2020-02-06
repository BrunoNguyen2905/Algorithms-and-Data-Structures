// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //first solution
    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');

    //  str = String(str).split('').sort().reverse().join('');
    //  return str;

    // return str.split('').reverse().join('');

    // //second solution
    // let reversed = '';
    // //for(var i=0; i < str.length; i ++){ dont use this old one
       
    // for (let character of str){
    //     reversed = character + reversed;
    // }
    // return reversed;
    
    //third solution
     str.split('').reduce
}

    
module.exports = reverse;
