function person(name,number){
    this.person_name = name
    this.person_number = number
    this.print = function(){
        console.log(this.person_name, ':',person_this.number);
        
    }
}

let user1 = new person1("luka", 313123144234)