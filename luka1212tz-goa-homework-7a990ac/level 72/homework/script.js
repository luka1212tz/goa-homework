let number = Number(prompt("შეიყვანეთ რიცხვი:"));
if (number % 2 === 0) {
    console.log("რიცხვი ლუწია.");
} else {
    console.log("რიცხვი კენტია.");
}

let temperature = Number(prompt("შეიყვანეთ ტემპერატურა ცელსიუსში:"));
if (temperature <= 10) {
    console.log("ცივი ტემპერატურაა.");
} else if (temperature <= 25) {
    console.log("ზომიერი ტემპერატურაა.");
} else {
    console.log("ცხელი ტემპერატურაა.");
}


let score = Number(prompt("შეიყვანეთ ქულა (0-100):"));
if (score >= 90 && score <= 100) {
    console.log("შენი შეფასებაა: A");
} else if (score >= 80 && score <= 89) {
    console.log("შენი შეფასებაა: B");
} else if (score >= 70 && score <= 79) {
    console.log("შენი შეფასებაა: C");
} else if (score >= 60 && score <= 69) {
    console.log("შენი შეფასებაა: D");
} else if (score >= 0 && score <= 59) {
    console.log("შენი შეფასებაა: F");
} else {
    console.log("გთხოვთ, შეიყვანეთ ქულა 0-100 დიაპაზონში.");
}
