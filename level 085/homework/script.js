function setAlarm(employed, vacation) {
    return employed && !vacation;
}

function updateLight(current) {
    if (current === "green") {
        return "yellow";
    } else if (current === "yellow") {
        return "red";
    } else if (current === "red") {
        return "green";
    }
}

function getDayName(number) {
    switch (number) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Wrong, please enter a number between 1 and 7";
    }
}