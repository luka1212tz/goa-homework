let result = 1;

for (let i = 1; i <= 10000; i++) {
    result = result * i;
    
    
}

console.log(result)   


for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log("3 ის ჯერადები არმოგვწონს გამოვტოვოთ");
        continue;
        
    }

    if (i == 15) {
        console.log("ძმაო კოდი გაჩერდაძ");
        break;
        
    }
    
    console.log(i);
}




for (let i = 1; i <= 100; i++) {
    if (i % 4 !== 0) {
        continue;
    }
    

    if (i === 50) {
        
        break;
    }
    
    console.log(i);
}
