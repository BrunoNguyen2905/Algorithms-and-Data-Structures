// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}; //empty object [] empty array
    let max = 0;
    let maxChar = '';

    for(let char of str){
        if(charMap[char])
            charMap[char] ++;
        else
            charMap[char] =1;
    }
    // console.log(chars);
    //iterating through an object
    for(let count in charMap){ // iterate through an array, use for..of..   iterate through an object, use for..in..
        if(charMap[count] > max){ //when we iterate w a for loop, count right now is assigned to the keys inside the object.. Examples: A:1 so A is a key
           max = charMap[count];
            maxChar = count;
        }    
    }
    return maxChar;

}
    


module.exports = maxChar;
