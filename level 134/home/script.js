
let success1 = Promise.resolve(1);
let success2 = Promise.resolve(2);
let success3 = Promise.resolve(3);

Promise.all([success1, success2, success3])
  .then(results => console.log(results));


let ok1 = Promise.resolve("A");
let fail1 = Promise.reject("B failed");
let ok2 = Promise.resolve("C");

Promise.all([ok1, fail1, ok2])
  .then(results => console.log(results))

let fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
let medium = new Promise(resolve => setTimeout(() => resolve("Medium"), 200));
let slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 300));

Promise.race([fast, medium, slow])
  .then(result => console.log( result));


let delayed1 = new Promise(resolve => setTimeout(() => resolve("Resolved 1"), 200));
let delayed2 = new Promise(resolve => setTimeout(() => resolve("Resolved 2"), 300));
let immediateReject = Promise.reject("Immediate Failure");

Promise.race([delayed1, delayed2, immediateReject])
  .then(result => console.log(result))
  .catch(error => console.error(error));


let rejected1 = Promise.reject("Fail 1");
let resolved = Promise.resolve("Success");
let rejected2 = Promise.reject("Fail 2");

Promise.any([rejected1, resolved, rejected2])
  .then(result => console.log(result));

let allFail1 = Promise.reject("Error 1");
let allFail2 = Promise.reject("Error 2");

Promise.any([allFail1, allFail2])
  .then(result => console.log(result))
  .catch(error => console.error(error.message));


let s1 = Promise.resolve("A");
let s2 = Promise.reject("B failed");
let s3 = Promise.resolve("C");
let s4 = Promise.reject("D failed");
let s5 = Promise.resolve("E");



Promise.allSettled([
  Promise.resolve(10),
  Promise.reject("Oops"),
  Promise.resolve(20),
])
  .then(results => {
    let fulfilled = results.filter(r => r.status === "fulfilled")
    console.log(fulfilled);
  });


Promise.allSettled([
  Promise.resolve(1),
  Promise.reject("fail 1"),
  Promise.reject("fail 2"),
])
  .then(results => {
    let failures = results.filter(r => r.status === "rejected").length;
    console.log(failures);
  });


let nums = [1, 2, 3].map(n => Promise.resolve(n));

Promise.all(nums)
  .then(numbers => numbers.map(n => n * 2))
  .then(doubled => console.log(numbers))