function countPositivesSumNegatives(arr) {
    if (!arr || arr.length === 0) return [];

    let countPositives = 0;
    let sumNegatives = 0;

    arr.forEach(num => {
        if (num > 0) countPositives++;
        else if (num < 0) sumNegatives += num;
    });

    return [countPositives, sumNegatives];
}