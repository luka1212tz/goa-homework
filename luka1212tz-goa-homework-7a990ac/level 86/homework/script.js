
const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    price: 15.99
};


console.log(book);


console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);
console.log(book.price);


console.log(book["title"]);
console.log(book["author"]);
console.log(book["year"]);
console.log(book["genre"]);
console.log(book["price"]);


console.log(`The book "${book.title}" was written by ${book.author} in ${book.year}. It belongs to the ${book.genre} genre and costs $${book.price}.`);


const student = {
    name: "Luka",
    age: 21,
    faculty: "Computer Science",
    course: 3,
    gpa: 3.8
};


console.log(student);


console.log(student.name);
console.log(student.age);
console.log(student.faculty);
console.log(student.course);
console.log(student.gpa);

console.log(student["name"]);
console.log(student["age"]);
console.log(student["faculty"]);
console.log(student["course"]);
console.log(student["gpa"]);


console.log( hi = `${student.name} is ${student.age} years old, studies at the faculty of ${student.faculty}, is in year ${student.course}, and has an average GPA of ${student.gpa}.`);

