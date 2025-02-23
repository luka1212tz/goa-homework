function selectPayer(names) {

    for (let i = 1; i <= names.length; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            names.push("FizzBuzz");
        } 

        else if (i % 3 === 0) {
            names.push("Fizz");
        } 

        else if (i % 5 === 0) {
            names.push("Buzz");
        }
    }
    

    let randomIndex = Math.floor(Math.random() * names.length);
    

    return names[randomIndex] + " გადაიხდის საკვების გადასახადს!";
}

let nameList = ["ლუკა", "მარიამი", "გიორგი", "ანა", "დათო"];


console.log(selectPayer(nameList));
