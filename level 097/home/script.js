// innerHTML და textContent ორივე არის DOM (ის თვისებები, რომლებიც გამოიყენება HTML ელემენტებთან სამუშაოდ. 


let kari1 = document.getElementById("mytext")
let saxli1 = document.getElementById("header")


kari1.textContent = "kari3"
saxli1.textContent = "saxli3"


let kari4 = document.getElementsByClassName("mytext1")
let saxli4 = document.getElementsByClassName("header1")

kari4.textContent = "kari5"
saxli4.textContent = "saxli5"



let kari6 = document.getElementsByTagName("h1")
let saxli6 = document.getElementsByTagName("p")

kari7.textContent = "kari8"
saxli7.textContent = "saxli8"

kari7.innerHTML = "<strong>kari9</strong>"
saxli7.innerHTML = "<strong>saxli9</strong>"

kari7.innertext = "kari10"
saxli7.innertext = "saxli10"


kari6.style.color = "darkgreen";
kari6.style.fontSize = "32px";
kari6.style.backgroundColor = "lightyellow";



saxli.style.color = "darkgreen";
saxli.style.fontSize = "32px";
saxli.style.backgroundColor = "lightyellow";









