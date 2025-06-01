let car = {
    brand: "porche",
    model: "gt2 rs",
    color: "green"
}


for(let info in car){
    console.log(info);
    

    console.log(car[info]);
    
    console.log(`ეს არის ${car.brand} ბრენდი, კონკრეტულად ${car.model} მოდელი, ფერით ${car.color}.`);
    

}


let array1 = [42, 'Hello', 99, 'World'];
let array2 = [10, 'JavaScript', true,  { name: 'Luka' }, [1, 2, 3],12.3];


for (let value of array1) {
  console.log(value);
}



for (let value of array2) {
  console.log(value);
}
