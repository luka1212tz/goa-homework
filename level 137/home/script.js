
let json1 = JSON.stringify([
  { "name": "Ana",   "rank": 1, "active": true },
  { "name": "Luka",  "rank": 2, "active": false },
  { "name": "Nino",  "rank": 3, "active": false }
], null, 2)
let data1 = JSON.parse(json1)
let result1 = data1.filter(obj => obj.active === false)
console.log(result1)



let json2 = JSON.stringify([
  { "name": "Ana",  "email": "ana@mail.com",  "verified": true },
  { "name": "Luka", "email": "luka@mail.com", "verified": false }
], null, 2)
let data2 = JSON.parse(json2)
let result2 = data2.map(obj => obj.name)
console.log(result2)



let json3 = JSON.stringify([
  { "score": 90, "passed": true },
  { "score": 75, "passed": true },
  { "score": 85, "passed": false },
  { "score": 95, "passed": true }
], null, 2)
let data3 = JSON.parse(json3)
let result3 = data3.filter(obj => obj.score > 80 && obj.passed).length
console.log(result3)



let json4 = JSON.stringify([
  { "id": "a1", "value": 10 },
  { "id": "b2", "value": 20 }
], null, 2)
let data4 = JSON.parse(json4)
let result4 = Object.fromEntries(data4.map(obj => [obj.id, obj.value]))
console.log(result4)



let json5 = JSON.stringify([
  { "name": "Ana",  "age": 22, "email": "ana@mail.com" },
  { "name": "Luka", "age": 18, "email": "luka@mail.com" }
], null, 2)
let data5 = JSON.parse(json5)
let result5 = data5.every(obj => "name" in obj && "age" in obj && "email" in obj)
console.log(result5)



let json6 = JSON.stringify([
  { "title": "Do homework", "priority": 2 },
  { "title": "Play",        "priority": 1 }
], null, 2)
let data6 = JSON.parse(json6)
let result6 = data6.sort((a, b) => a.priority - b.priority)
console.log(result6)



let json7 = JSON.stringify([
  { "item": "apple",  "category": "fruit" },
  { "item": "carrot", "category": "vegetable" },
  { "item": "banana", "category": "fruit" }
], null, 2)
let data7 = JSON.parse(json7)
let result7 = data7.reduce((acc, obj) => {
  if (!acc[obj.category]) acc[obj.category] = []
  acc[obj.category].push(obj.item)
  return acc
}, {})
console.log(result7)



let arr8 = [
  { "name": "Ana",  "status": "active" },
  { "name": "Luka", "status": "inactive" }
]
let result8 = JSON.stringify(arr8, null, 2)
console.log(result8)


let json9a = JSON.stringify([
  { "id": 1, "name": "Ana" },
  { "id": 2, "name": "Luka" }
], null, 2)

let json9b = JSON.stringify([
  { "id": 2, "name": "Luka" },
  { "id": 3, "name": "Nino" }
], null, 2)




let json10 = JSON.stringify([
  { "id": 1, "status": "pending" },
  { "id": 2, "status": "pending" },
  { "id": 3, "status": "done" }
], null, 2)
let data10 = JSON.parse(json10)
let result10 = data10.map(obj => {
  if (obj.status === "pending") obj.status = "complete"
  return obj
})
console.log(result10)
