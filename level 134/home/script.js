let promise1 = new Promise((resolve, reject) => {
  resolve("status: ok code 200");
});

promise1
    .then(result => console.log(result));


let promise2 = Promise.reject(("Custom failure!"));
promise2
    .catch(err => console.error( err.message));


function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Waited ${ms} ms`), ms);
  });
}
delay(1500)
    .then(msg => console.log(msg));


let promise4 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("✅ Success");
  } else {
    reject("❌ Failure");
  }
});
promise4
  .then(result => console.log( result))
  .catch(err => console.log( err));


let promise5 = new Promise((resolve, reject) => {
  resolve(3);
});


promise5
  .then(num => num + 2)     
  .then(num => num * 4)      
  .then(num => num - 5)      
  .then(result => console.log(result));


function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`User ${id} data`);
    }, 1500);
  })
}
fetchUser(7).then(data => console.log( data));


let promise7 = new Promise((resolve, reject) => {
  if(Math.random() > 0.5){
    resolve("Success")
  }else{
    reject('failed')
  }
    
  
});
promise7
  .then(res => console.log( res))
  .catch(err => console.log(err))
  .finally(() => console.log("Cleanup complete"));


let nested = new Promise(resolve => {
  resolve(new Promise(innerResolve => {
    innerResolve("Nested resolved!");
  }));
});
nested.then(result => console.log( result));




function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Waited ${ms} ms`), ms);
  });
}
wait(1000)
.then(msg => console.log("#9:", msg));

let p1 = new Promise(resolve => setTimeout(() => resolve("One"), 1000));
let p2 = new Promise(resolve => setTimeout(() => resolve("Two"), 2000));
let p3 = new Promise(resolve => setTimeout(() => resolve("Three"), 3000));
p1
  .then(results => console.log( results));
p2
  .then(results => console.log( results));
p1
  .then(results => console.log( results));


