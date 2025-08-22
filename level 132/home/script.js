console.log(1);
console.log(2);
console.log(3);



setTimeout(() => console.log(2),3000);


console.log(1);
console.log(func())
console.log(3);



//სინქრონული: კოდი მუშაობს რიგრიგობით ყოველი ოპერაცია ელოდება წინას
//არასინქრონული: კოდი არ ელოდება აგრძელებს სხვას და შედეგი მოგვიანებით ბრუნდება
