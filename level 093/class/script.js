
let fruits = ["ატამი","მსხალი","ვაშლი","ბანანი"]

let slicedfruits = fruits.slice(1,3)

fruits.splice(2,4,'fig')

let  fruitjoined = fruits.join('-')



let nestedArray = [[1, 2, 3,[4, 5, [6, 7,8,[[9, 10]]]]]]



let flatArray = nestedArray.flat(1)



let fullyFlatArray = nestedArray.flat(Infinity)


function checkelement(array, value) {
    return array.includes(value)
}


function findindexofelement(array, value) {
    return array.indexOf(value)
}

function findlastindexofelement(array, value) {
    return array.lastIndexOf(value)
}