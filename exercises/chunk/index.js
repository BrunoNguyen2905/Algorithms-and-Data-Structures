// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



function chunk(array, size) {
    //know how to use array.slice( begin, end): Method  slice() returns a reference copy (shallow copy) 
    //part of an array as an array to receive the index value from begin dispatch end(not included end). The original array has not been changed.
    const chunked =[]; //empty array   {} empty object
    let index =0;

    while(index < array.length){
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

module.exports = chunk;


// function chunk(array, size) {
//     const chunked =[]; //new array that holds different chunks of data

//     for(let element of array){
//         const last = chunked[chunked.length -1];//array starts from 0, length starts from 1

//         if(!last || last.length === size){
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }
//     return chunked;
// }
