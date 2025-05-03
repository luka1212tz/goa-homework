function numberToWord(num) {
    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid input";
    }
}

function getGrade(s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3;

    switch (true) {
        case avg >= 90: return 'A';
        case avg >= 80: return 'B';
        case avg >= 70: return 'C';
        case avg >= 60: return 'D';
        default: return 'F';
    }
}

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}