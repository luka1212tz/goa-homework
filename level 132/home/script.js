let promise1 = new Promise((resolve, reject) => {
  resolve("Hello, Promise!");
});

promise1
    .then(result => console.log('warmatebuli', result))


    

let errorPromise = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

errorPromise
    .catch(result => console.log('warumatebeli', result))





let delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 seconds have passed");
  }, 2000);
});

delayedPromise
    .then(result => console.log('succsess', result))





let randomPromise = new Promise((resolve, reject) => {
  let success = Math.random() > 0.5;
  if (success) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

randomPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));





let chainPromise = new Promise((resolve, reject) => {
  resolve(5);
});

chainPromise
  .then(num => num * 2)
  .then(num => num * 2)
  .then(num => num * 2)
  .then(result => console.log(result)); 
 
  


 let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 1000);
});

fetchData
    .then(data => console.log(data));



