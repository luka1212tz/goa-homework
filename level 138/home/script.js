fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) 
  .then(users => {
    users.forEach(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch(error => console.error('Error fetching users:', error));






fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(data => {
    let completedTodos = data.filter(todo => todo.completed === true)
    
    console.log(JSON.stringify(completedTodos, null, 2))
  })





Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
  fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
])
  .then(([users, posts]) => {
    users.forEach(user => {
      let userPost = posts.find(post => post.userId === user.id)
      console.log(`მომხმარებელი: ${user.name}`)
      console.log(`პოსტი: ${userPost ? userPost.title : "პოსტი ვერ მოიძებნა"}`)
      
    })
  })





function getCountryInfo(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      let countryData = data[0]
      console.log("ოფიციალური სახელი:", countryData.name.official)
      console.log("კაპიტალი:", countryData.capital[0])
      console.log("კოდი:", countryData.cca2) 
    })
}

getCountryInfo("georgia")
