"use strict";

function flattenAndSort(array) {

  let arr = []
  for (let sub of array) {
    arr.push(...sub)
  }
  return arr.sort((a, b) => a - b)
}
 


function rowSumOddNumbers(n) {
    let result = n * n * n
    return result
}





function removeDuplicates(arr) {
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    
    return result
}