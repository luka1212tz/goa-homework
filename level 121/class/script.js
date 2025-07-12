class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(this.name + " says: Woof! 🐶");
  }
}

let myDog = new Dog("Buddy");
console.log("ძაღლის სახელი:", myDog.name);
myDog.bark();
