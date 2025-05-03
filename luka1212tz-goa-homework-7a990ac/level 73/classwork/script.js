function switchItUp(number){
  
    return number == 0 ? "Zero" :
           number == 1 ? "One" :
           number == 2 ? "Two" :
           number == 3 ? "Three" :
           number == 4 ? "Four" :
           number == 5 ? "Five" :
           number == 6 ? "Six" :
           number == 7 ? "Seven" :
           number == 8 ? "Eight" :
           "Nine";
    
    
    
  }

  function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
  
    if (average >= 90 && average <= 100) {
      return 'A';
    } else if (average >= 80 && average < 90) {
      return 'B';
    } else if (average >= 70 && average < 80) {
      return 'C';
    } else if (average >= 60 && average < 70) {
      return 'D';
    } else {
      return 'F';
    }

    
  }function simpleMultiplication(number) {
    if (number % 2 == 0)
      return number * 8
   else
     return number * 9
 }