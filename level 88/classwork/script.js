
let academy = {
    name: "Tech Academy",
    courses: "javascript",
    socialLink: "academy.com",
    reviews: {
        user1: {
            name: "John Doe",
            status: "parent",
            review: "მომწონს"
        },
        user2: {
            name: "Jane Smith",
            status: "child",
            review: "მომწონს"
        },
        user3: {
            name: "Mike Johnson",
            status: "parent",
            review: "მომწონს"
        }
    }
};


console.log(Object.entries(academy));


console.log(Object.keys(academy));


console.log(Object.values(academy));

console.log(Object.hasOwnProperty(academy,'course'));


let member = 500 

let newAcademy = Object.assign(academy,member);


console.log(newAcademy);


Object.freeze(newAcademy);


console.log(Object.isFrozen(newAcademy)); 
