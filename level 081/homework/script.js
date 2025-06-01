
for (let i = 1; i <= 20; i++) {
    if (i === 7 || i === 13) continue;
    console.log(i);
}

console.log("-----------");

for (let i = 2; i <= 30; i += 2) {  
    if (i % 8 === 0) break;
    console.log(i);
}




for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) continue;
    console.log(i);
}
