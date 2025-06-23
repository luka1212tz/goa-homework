
let numbers1 = [2, 4, 6, 8];
let allEven = numbers1.every(num => num % 2 === 0);


let strings = ["apple", "banana", "kiwi", "grape"];
let hasLongString = strings.some(str => str.length > 5);


let numbers2 = [1, 2, 3, 4];
let doubledNumbers = [];
numbers2.forEach(num => {
  doubledNumbers.push(num * 2);
});


let users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 19 }
];
let allAdults = users.every(user => user.age >= 18);


let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 25 },
  { name: "Monitor", price: 120 }
];
let hasAffordableProduct = products.some(product => product.price < 20);




let users1= [
  { name: "Luka", email: "luka@example.com" },
  { name: "Nika", email: "nika@example.com" }
];


let allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
console.log("All orders have items:", allOrdersHaveItems);


let hasPendingDelivery = customerOrders.some(order => order.isDelivered === false);
console.log("There is at least one pending delivery:", hasPendingDelivery);

customerOrders.forEach(order => {
  console.log(`Processing Order ID: ${order.orderId}`);

  order.items.forEach(item => {
    console.log(` - ${item.title} (Quantity: ${item.quantity})`);
  });

 
  let allExpensive = order.items.every(item => item.price > 10);
  console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);

  let hasMultiple = order.items.some(item => item.quantity > 1);
  console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultiple}`);
});

let formattedEmails = users.map(user => `<${user.email}>`);
console.log("Formatted Emails:", formattedEmails);

