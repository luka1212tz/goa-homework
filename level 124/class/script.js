mymap = new Map()

mymap.set('Richard', 'Developer');
mymap.set('Maria', 'SEO Specialist');
mymap.set('Tom', 'Product Manager');
mymap.set('David', 'Accountant');
mymap.set('Sophia', 'HR Manager');

let name = prompt("name")
let position = prompt("position")

mymap.set(name,position)

for(let[key,value] of mymap.entries()){
  console.log(key,value);
  
}