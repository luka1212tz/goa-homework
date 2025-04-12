
function displayCurrentDateTime() {
    const now = new Date();
    const formatted = now.getFullYear() + '-' + 
        String(now.getMonth() + 1).padStart(2, '0') + '-' + 
        String(now.getDate()).padStart(2, '0') + ' ' + 
        String(now.getHours()).padStart(2, '0') + ':' + 
        String(now.getMinutes()).padStart(2, '0') + ':' + 
        String(now.getSeconds()).padStart(2, '0');
    return formatted;
}


function calculateAge(birthdateStr) {
    const birthdate = new Date(birthdateStr);
    const today = new Date();
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}


function getDayOfWeek(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
}


let counter = 0;
setInterval(() => {
    console.log('Timer: ', counter++);
}, 1000);

function updateTime() {
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:` +
                    `${now.getMinutes().toString().padStart(2, '0')}:` +
                    `${now.getSeconds().toString().padStart(2, '0')}`;
    document.getElementById('timeDisplay').textContent = timeStr;
}
setInterval(updateTime, 1000);

setInterval(() => {
    console.log('Random:', Math.random());
}, 1000);


function showMessageAfterDelay(message, delay) {
    setTimeout(() => {
        alert(message);
    }, delay);
}


setTimeout(() => {
    console.log('Hello, this is your delayed greeting!');
}, 2000);

function messageOne() { console.log('First message'); }
function messageTwo() { console.log('Second message'); }
function messageThree() { console.log('Third message'); }

setTimeout(messageOne, 1000);
setTimeout(messageTwo, 2000);
setTimeout(messageThree, 3000);

function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = '';

    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    document.getElementById('greeting').textContent = greeting;
}
