function XO(str) {
    str = str.toLowerCase();
    let xCount = 0;
    let oCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') xCount++;
        else if (str[i] === 'o') oCount++;
    }

    return xCount === oCount;
}


function stray(numbers) {
    numbers.sort((a, b) => a - b);
    if (numbers[0] !== numbers[1]) {
        return numbers[0];
    } else {
        return numbers[numbers.length - 1];
    }
}


function getDivisorsCnt(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            if (i * i === n) {
                count += 1;
            } else {
                count += 2;
            }
        }
    }
    return count;
}
