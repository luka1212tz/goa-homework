let countryCapitalMap = new Map([
  ["USA", "Washington, D.C."],
  ["France", "Paris"],
  ["Japan", "Tokyo"],
  ["India", "New Delhi"],
  ["Brazil", "Brasília"]
]);

console.log("All country-capital entries:");
for (let [country, capital] of countryCapitalMap) {
  console.log(`${country}: ${capital}`);
}

let fruitColorMap = new Map([
  ["Apple", "Red"],
  ["Banana", "Yellow"],
  ["Grapes", "Purple"]
]);

fruitColorMap.set("Orange", "Orange");
fruitColorMap.set("Lemon", "Yellow");
fruitColorMap.delete("Banana");

console.log("\nFinal fruit-color Map:");
for (let [fruit, color] of fruitColorMap) {
  console.log(`${fruit}: ${color}`);
}

let keyToCheck = "Apple";
console.log(`\nDoes "${keyToCheck}" exist in the fruit map?`);
console.log(fruitColorMap.has(keyToCheck) ? "Yes" : "No");

console.log("\nCapitals:");
for (let [country, capital] of countryCapitalMap) {
  console.log(`The capital of ${country} is ${capital}`);
}

let mapArray = Array.from(countryCapitalMap);
console.log("\nArray from Map:", mapArray);

let newMapFromArr = new Map(mapArray);
console.log("New Map from Array:");
for (let [country, capital] of newMapFromArr) {
  console.log(`${country}: ${capital}`);
}

function sortMapByKey(map) {
  return new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

let sortedMap = sortMapByKey(countryCapitalMap);
console.log("\nSorted Map by country names:");
for (let [country, capital] of sortedMap) {
  console.log(`${country}: ${capital}`);
}

function countWords(sentence) {
  let words = sentence.toLowerCase().split(/\s+/);
  let wordMap = new Map();
  for (let word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
  return wordMap;
}

let sentence = "random";
let wordCountMap = countWords(sentence);

console.log("\nWord occurrences:");
for (let [word, count] of wordCountMap) {
  console.log(`${word}: ${count}`);
}
