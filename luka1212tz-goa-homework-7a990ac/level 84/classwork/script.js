
function aboutme(name, lastname, age, birthyear) {

    let inputName = prompt("name");
    let inputLastname = prompt("lastname");
    let inputAge = prompt("age");
    let inputBirthyear = prompt("birthyear");

   
    if (inputName === 'luka') {
        console.log("სწორია");
    } else {
        console.log(" არასწორია");
    }


    if (inputLastname === 'modebadze') {
        console.log(" სწორია");
    } else {
        console.log("არასწორია");
    }

   
    if (inputAge == 13) {
        console.log(" სწორია");
    } else {
        console.log("არასწორია");
    }

   
    if (inputBirthyear == 2011) {
        console.log("სწორია");
    } else {
        console.log("არასწორია");
    }

    
    return {
        სახელი: inputName,
        გვარი: inputLastname,
        ასაკი: inputAge,
        დაბადების_წელი: inputBirthyear
    };
}

function area(x,y){
    
    return(x * y)
 
}

    let input1 = Number(prompt("number")) 
    let input2 = Number(prompt("number")) 



console.log(area(input1,input2))




