fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error));

fetch
  .then(response => response.json)





let city = "tokyo"  
let API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
let API_ENDPINT_LINK = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

console.log(API_ENDPINT_LINK)


fetch(API_ENDPINT_LINK)
  .then(response => response.json())
  .then(data => {
    console.log(data)  
  })
  .catch(error => console.error(error));
