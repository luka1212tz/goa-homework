function filterAndSum(threshold, ...numbers) {
  let filtered = numbers.filter(n => n > threshold);
  let sum = filtered.reduce((acc, val) => acc + val, 0);
  return sum;
}


const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "TechCorp",
    color: "Silver",
    weight: "2kg"
};

let { id, name, ...details } = product;

console.log("Task 2:");
console.log("ID:", id);         
console.log("Name:", name);      
console.log("Details:", details); 



function combineArrays(str, ...arrays) {
    let combined = [str]; 
    for (let arr of arrays) {
        combined.push(...arr); 
    }
    return combined;
}


let result = combineArrays("Start", [1, 2], ["a", "b"], [true, false]);


