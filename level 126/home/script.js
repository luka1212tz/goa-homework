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


function gimme(triplet) {
    let sorted = [...triplet].sort((a, b) => a - b);
    let middle = sorted[1];
    return triplet.indexOf(middle);
}


function printerError(s) {
    let errors = 0;
    for (let char of s) {
        if (char < 'a' || char > 'm') {
            errors++;
        }
    }
    return errors + "/" + s.length;
}
