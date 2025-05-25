let name = "luka"

function name1(){
    name = "dato"
    
}
name1()
// თუ გამოვიძახებთ name1 ფუნქციას მაშინ კონსოლში გამოვა დათო მაგრამ თუ არ გამოვიძახებთ ფუნქციას კონსოლში გამოვა ლუკა

console.log(name)



let EvenOrOdd = num => {
    if(num % 2 == 0){
        return("რიცხვი ლუწია")
    }else{
        return("რიხვი კენტია")
    }
}