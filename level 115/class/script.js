function findSmallestInt(arr) {
  return Math.min(...arr);
}


console.log(findSmallestInt([34, 15, 88, 2]));      
console.log(findSmallestInt([34, -345, -1, 100]));   


function filter_list(list) {
  return list.filter(item => typeof item === 'number');
}

console.log(filter_list([1, 2, 'a', 'b']));             
console.log(filter_list([1, 'a', 'b', 0, 15]));         
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); 
