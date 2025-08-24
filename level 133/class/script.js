let promise = new Promise((resolve, reject) => {
  let isCarHere = true;
  if (isCarHere) {
    resolve('car is here come pick it up');
  } else {
    reject('car is still on the cruise');
  }
});

promise
  .then(result => console.log('warmatebuli', result))
  .catch(error => console.log('warumatebeli', error))
  .finally(() => console.log('enjoy the car '));



