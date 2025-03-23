
function getArrayLength(arr) {
    return arr.length;
}


function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}


function pushValue(arr, value) {
    return arr.push(value);
}


function popValue(arr) {
    return arr.pop();
}


function concatenateAndPush(arr1, arr2, value) {
    let newArr = arr1.concat(arr2);
    newArr.push(value);
    return newArr;
}


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


function getEvenIndexedElements(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}


function getStringLengths(arr) {
    let lengths = [];
    for (let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    return lengths;
}
