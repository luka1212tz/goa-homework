var number =function(array){
   
  let arr = []
  
  for(let i = 0; i < array.length; i++){
    arr.push((i + 1) + ': ' + array[i])
  }
  
  return arr
} 

function towerBuilder(nFloors) {
    let tower = []

    for (let i = 0; i < nFloors; i++) {
        let spaces = " ".repeat(nFloors - i - 1)
        let stars = "*".repeat(i * 2 + 1)

        tower.push(spaces + stars + spaces)
    }

    return tower
}

function findOutlier(integers) {
    let even = integers.filter(num => num % 2 === 0)
    let odd = integers.filter(num => num % 2 !== 0)

    return even.length === 1 ? even[0] : odd[0]
}

function arrayDiff(a, b) {
    return a.filter(num => !b.includes(num))
}