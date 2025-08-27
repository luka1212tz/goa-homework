let promise = new promise((resolve,reject)=>{
    let book = true
    
    if(book = true){
      resolve('book is here')
    }else{
      reject('book is not here')
    }
})


promise
  .then(res => console.log('succsess',res))
  .catch(err => console.log('fail',err))
  .finally(final => console.log('finally'))


//პრომისი არის 'მომავლის დაპირება'  შეიძლება შესრულდეს ან არ შესრულდეს


//.then გამოვა როცა პრომისი შესრულდება


//.catch გამოვა როცა პრომისი ვერ შესრულდება


//.finally გამოვა სულ არ აქვს მნიშვნელობა შესრულდა თუ არა პრომისი


// არის სამი ეტაპი ლოდინი,შესრულება და უარყოფა