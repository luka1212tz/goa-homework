
function findMax(a, b, c) {
    return Math.max(a, b, c);
}


function isEven(number) {
    return number % 2 === 0;
}


function multiplyNumbers(start, end) {
    let product = 1;
    for (let i = start; i <= end; i++) {
        product *= i;
    }
    return product;
}


function findMin(a, b, c) {
    return a < b ? (a < c ? a : c) : (b < c ? b : c);
}

function calculateSum(n) {
    let sum = 0;
    switch (true) {
        case n > 0:
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            break;
        default:
            sum = 0;
    }
    return sum;
}
