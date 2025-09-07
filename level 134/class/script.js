let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("წარმატებული"), 1000);
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("წარუმატებელი"), 500)
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("წარმატებული"), 2000)
})

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("წარმატებული"), 1500)
})

let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => reject("წარუმატებელი"), 800)
})

Promise.all([promise1, promise3, promise4]).then(results => console.log(results))
    
Promise.race([promise1, promise2, promise3, promise4, promise5]).then(result => console.log(result))

Promise.any([promise2, promise5, promise3, promise1]).then(result => console.log(result))
   
Promise.allSettled([promise1, promise2, promise3, promise4, promise5]).then(results => console.log(results));


