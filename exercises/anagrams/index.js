// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//BASUC KNOWLEDGE
//const obj ={
//     a:1,
//     b:1,
//     c:1   
// };

// Object.keys(obj); return ["a", "b", "c"] 
// Object.keys(obj).length; return 3

// iterate through an array, use for..of..
// iterate through an object, use for..in..

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    } 

    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    return true;
 }

 function buildCharMap(str){
     const charMap ={};

    for(let char of str.replace(/[^\w]/g).toLowerCase()){
        charMap[char] = charMap[char]+1 || 1;
    } 
    return charMap;          
 }

module.exports = anagrams;

// charMapA =[];
//     charMapB = [];
    
//     convertedStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     convertedStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

//     for(let ele1 of convertedStringA){
//         if(charMapA[ele1])
//             charMapA[ele1]++;
//         else
//             charMapA[ele1] = 1;
//     }

//     for(let ele2 of convertedStringB){
//         if(charMapB[ele2])
//             charMapB[ele2]++;
//         else
//             charMapB[ele2] = 1;
//     }

//     return charMapA.length== charMapB.length;