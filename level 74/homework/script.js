let dayNumber = 3;
switch(dayNumber) {
    case 1:
        console.log("ორშაბათი");
        break;
    case 2:
        console.log("სამშაბათი");
        break;
    case 3:
        console.log("სამშაბათი");
        break;
    case 4:
        console.log("ოთხშაბათი");
        break;
    case 5:
        console.log("ხუთშაბათი");
        break;
    case 6:
        console.log("პარასკევი");
        break;
    case 7:
        console.log("კვირა");
        break;
    default:
        console.log("არასწორი დღე");
        break;
}

let weatherCode = 2;
switch(weatherCode) {
    case 1:
        console.log("მზიანი");
        break;
    case 2:
        console.log("წვიმიანი");
        break;
    case 3:
        console.log("მოღრუბლული");
        break;
    case 4:
        console.log("ქარიანი");
        break;
    default:
        console.log("არ არის დადგენილი");
        break;
}

let month = "მაისი";
switch(month) {
    case "მაისი":
        console.log("მაისი");
        break;
    default:
        console.log("არ არის დადგენილი");
        break;
}

let day = 15;
let half = (day <= 15) ? "პირველი ნახევარი" : "მეორე ნახევარი";
console.log(half);
