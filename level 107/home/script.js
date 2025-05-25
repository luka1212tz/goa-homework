let title = document.getElementById("main-title");
title.textContent = "Hello, MasterJaneza!";


let notes = document.getElementsByClassName("note");
for (let i = 0; i < notes.length; i++) {
  notes[i].style.color = "red";
  notes[i].style.fontWeight = "bold";
}


let listItems = document.getElementsByTagName("li");
console.log("Total <li> elements:", listItems.length);
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.border = "1px solid black";
}


let cardText = document.querySelector(".card p");
cardText.textContent = "Updated by querySelector()";
