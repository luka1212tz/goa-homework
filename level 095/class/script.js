



function class1(y,){
    return Math.ceil(( y / 100))
}



function class2(x,y){
    let loveprocent = Math.floor(Math.random() * 101)
    return (`${x} და ${y}, თქვენი სიყვარულის პროცენტია: ${loveprocent} `)
}

let i = prompt("adamiani1")
let o = prompt("adamiani2")

console.log(class2(i,o))
