let students = [
  { name: "Davit", age: 18, grade: 60, subject: "Math" },
  { name: "Elena", age: 23, grade: 92, subject: "Physics" }
]


let student = students.find(student => student.subject === "Math")

console.log(student)

let names = students.map(student => student.name)

console.log(names)

let davit = students.find(student => student.name === "Davit")

davit.age += 1

console.log(davit)

students.sort((a, b) => b.age - a.age)

console.log(students)

let javascriptStudents = students.filter(student => student.subject === "JavaScript")

console.log(javascriptStudents)