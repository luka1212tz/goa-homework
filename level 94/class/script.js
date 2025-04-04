function printerError(s) {
    let errors = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] < 'a' || s[i] > 'm') {
        errors++;
      }
    }
    return `${errors}/${s.length}`;
  }
  

  function openOrSenior(data) {
    return data.map(([age, handicap]) => {
      return (age >= 55 && handicap > 7) ? "Senior" : "Open";
    });
  }