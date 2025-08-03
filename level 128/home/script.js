//https://www.codewars.com/kata/563b662a59afc2b5120000c6 ვერ გავაკეთე

function sortArray(array) {
    let odds = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);
    let evens = array.filter(n => n % 2 === 0).sort((a, b) => b - a);

    let oddIndex = 0;
    let evenIndex = 0;

    return array.map(n => {
        if (n % 2 === 0) {
            return evens[evenIndex++];
        } else {
            return odds[oddIndex++];
        }
    });
}
