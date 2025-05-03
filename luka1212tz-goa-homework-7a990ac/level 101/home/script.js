let myDiv = document.getElementById('myDiv');
myDiv.classList.add('highlight');

myDiv.classList.remove('highlight');

let toggleButton = document.getElementById('toggleButton');
let targetDiv = document.getElementById('targetDiv');
toggleButton.addEventListener('click', function() {
    targetDiv.classList.toggle('active');
});

let checkParagraph = document.getElementById('checkParagraph');
let hasImportantClass = checkParagraph.classList.contains('important');
console.log(hasImportantClass);

let replaceDiv = document.getElementById('replaceDiv');
replaceDiv.classList.replace('red', 'blue');

let itemDiv = document.getElementById('itemDiv');
console.log(itemDiv.classList.item(1));

let myUl = document.getElementById('myUl');
let newLi = document.createElement('li');
newLi.textContent = 'New Item';
myUl.appendChild(newLi);
myUl.removeChild(myUl.firstElementChild);
myUl.children[1].textContent = 'Updated Item 2';

let myParagraph = document.getElementById('myParagraph');
myParagraph.textContent = 'New text content!';

let styledDiv = document.getElementById('styledDiv');
styledDiv.style.backgroundColor = 'lightblue';
styledDiv.style.color = 'darkblue';

let myList = document.getElementById('myList');
let newListItem = document.createElement('li');
newListItem.textContent = 'New list item';
myList.appendChild(newListItem);

let removableList = document.getElementById('removableList');
removableList.removeChild(removableList.children[1]);

let myImage = document.getElementById('myImage');
myImage.src = 'https://via.placeholder.com/300';
myImage.alt = 'Updated image';
