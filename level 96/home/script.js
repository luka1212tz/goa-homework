



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




function updateTime() {
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:` +
                    `${now.getMinutes().toString().padStart(2, '0')}:` +
                    `${now.getSeconds().toString().padStart(2, '0')}`;
    document.getElementById('timeDisplay').textContent = timeStr;
}



function showMessageAfterDelay(message, delay) {
    setTimeout(() => {
        alert(message);
    }, delay);
}




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
