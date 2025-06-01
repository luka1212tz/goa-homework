function momxmarebeli(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;

    this.info1 = function() {
        return `ჩემი სახელია ${this.name}, ჩემი გვარია ${this.lastName}, ჩემი ტელეფონის ნომერია ${this.phoneNumber}, ჩემი ელფოსტაა ${this.email}.`;
    };
}
let momxmarebeli1 = new momxmarebeli ("ლუკა", "მოდებაძე", "13333124", "luka@gmail.com", "password1234", "password1234");
let momxmarebeli2 = new momxmarebeli("ანა", "კობახიძე", "42421222", "ana@gmail.com", "password123", "password123");
let momxmarebeli3 = new momxmarebeli("გიორგი", "ბერიძე", "1231231233", "giorgi@gmail.com", "password123", "password123")

console.log(momxmarebeli1.info1());
console.log(momxmarebeli2.info1());
console.log(momxmarebeli3.info1());












