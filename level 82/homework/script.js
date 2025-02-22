function makeNegative(number) {
    if (number > 0) {
        return -number;
    }
    return number;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function opposite(number) {
    return -number;
}

function areaOrPerimeter(length, width) {
    return length === width ? length * width : 2 * (length + width);
}
