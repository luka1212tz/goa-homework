let password = 'Group 41 is best';

function guessPassword() {
    let attempts = 3;
    while (attempts > 0) {
        let userInput = prompt('შეიყვანეთ პაროლი:');
        if (userInput === password) {
            alert('თქვენი შეყვანილი პაროლი სწორია');
            return;
        }
        attempts--;
        if (attempts === 0) {
            alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
        }
    }
}

guessPassword();

function factorial(N) {
    let result = 1;
    for (let i = 1; i <= N; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

function countdown() {
    let time = 100;
    let interval = setInterval(() => {
        console.log(`დარჩენილია ${time} წამი`);
        time--;
        if (time < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

countdown();
