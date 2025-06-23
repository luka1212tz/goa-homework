
let name = "Luka";
let age = 20;

let person = {
  name,
  age
};

console.log("მაგალითი 1:", person); 


let user = {
  sayHello() {
    console.log("მაგალითი 2: Hello!");
  }
};

user.sayHello();


let key = "score";

let game = {
  [key]: 100
};

console.log("მაგალითი 3:", game); 
let title = "developer";
let level = 3;

let job = {
  title,
  level,
  describe() {
    console.log(`მაგალითი 4: Title: ${title}, Level: ${level}`);
  }
};

job.describe(); 


function createUser(username, email) {
  return {
    username,
    email,
    isActive: true,
    login() {
      console.log(`მაგალითი 5: ${username} logged in.`);
    }
  };
}
