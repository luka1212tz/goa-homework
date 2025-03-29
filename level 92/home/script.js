
let numsArray = [1, 2, 3, 4, 5];
let strArray = ["a", "b", "c", "d", "e"];


let combinedArray = numsArray.concat(strArray);
console.log("After concatenation:", combinedArray);


combinedArray.copyWithin(4, 0, 3);
console.log("After copyWithin:", combinedArray);


combinedArray.fill("filled", 2, 5);
console.log("After fill:", combinedArray);


combinedArray.pop();
console.log("After pop:", combinedArray);


combinedArray.shift();
console.log("After shift:", combinedArray);

combinedArray.unshift(100, 200);
console.log("After unshift:", combinedArray);



let people = [{ name: "Alice" }, { name: "Bob" }];
let places = [{ city: "Paris" }, { city: "London" }];


let mergedArray = people.concat(places);
console.log("After concatenation:", mergedArray);


mergedArray.copyWithin(2, 0, 2);
console.log("After copyWithin:", mergedArray);

mergedArray.fill({ city: "New York" }, mergedArray.length - 2, mergedArray.length);
console.log("After fill:", mergedArray);


mergedArray.pop();
console.log("After pop:", mergedArray);


mergedArray.shift();
console.log("After shift:", mergedArray);


mergedArray.unshift({ name: "Charlie" }, { name: "David" });
console.log("After unshift:", mergedArray);



let mixedArray = [1, "two", 3, "four", 5];


let extendedArray = mixedArray.concat([true, false]);
console.log("After concatenation:", extendedArray);


extendedArray.copyWithin(0, 2, 4);
console.log("After copyWithin:", extendedArray);


extendedArray.fill(0, 4, 7);
console.log("After fill:", extendedArray);


extendedArray.pop();
console.log("After pop:", extendedArray);


extendedArray.shift();
console.log("After shift:", extendedArray);


extendedArray.unshift(null, undefined);
console.log("After unshift:", extendedArray);