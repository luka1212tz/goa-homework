
class Dog {
  constructor(name) {
    this.name = name;
  }


  bark() {
    console.log("Woof!");
  }
}


let myDog = new Dog("Buddy");


console.log(myDog.name);


myDog.bark(); 


class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }


  displayInfo() {
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
  }
}

let car1 = new Car("Toyota", "Camry", 2020);
let car2 = new Car("Honda", "Civic", 2022);

