const mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);

console.log(mySet.has(20));
console.log(mySet.has(40));

console.log(mySet.size);

mySet.delete(20);
console.log(mySet);

mySet.clear();
console.log(mySet);

mySet.add('a');
mySet.add('b');
mySet.add('c');

mySet.forEach(value => console.log(value));

const myArray = [...mySet];
console.log(myArray);

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union);

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);

const numbersSet = new Set([5, 10, 15, 20, 25]);

const numberSet12345 = new Set([1, 2, 3, 4, 5]);

const fruits = new Set(["apple", "banana"]);
fruits.add("orange");

fruits.add("apple");
console.log(fruits);

console.log(fruits.has("banana"));

fruits.delete("banana");
console.log(fruits);

const colors = new Set(["red", "blue", "green"]);
for (const color of colors) {
  console.log(color);
}

const namesSet = new Set(["Alice", "Bob", "Charlie"]);
const namesArray = [...namesSet];
console.log(namesArray);

const dupArray = [1, 2, 2, 3, 3, 4];
const uniqueArray = [...new Set(dupArray)];
console.log(uniqueArray);

const letters = ['a', 'b', 'a', 'c', 'b'];
const uniqueLetters = new Set(letters);
console.log(uniqueLetters.size);

const tempSet = new Set(["one", "two", "three"]);
tempSet.clear();
console.log(tempSet);
