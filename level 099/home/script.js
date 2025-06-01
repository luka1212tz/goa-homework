
const paragraph = document.createElement('p');
paragraph.textContent = 'This is a paragraph.';
document.body.appendChild(paragraph);


const heading2 = document.createElement('h2');
heading2.textContent = 'Subheading';
document.body.appendChild(heading2);


heading2.textContent = 'Updated Subheading';


const divElement = document.createElement('div');
divElement.textContent = 'This is a div.';
document.body.appendChild(divElement);


document.body.removeChild(divElement);


const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.textContent = 'Item 1';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'Item 2';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'Item 3';
ul.appendChild(li3);


document.body.appendChild(ul);


console.log('First child:', ul.firstElementChild.textContent); // "Item 1"
console.log('Last child:', ul.lastElementChild.textContent);  // "Item 3"


const heading3 = document.createElement('h3');
heading3.textContent = 'Inserted Heading';


document.body.insertBefore(heading3, document.body.firstElementChild);



const span = document.createElement('span');
span.textContent = 'This is a span.';

const containerDiv = document.getElementById('container');

containerDiv.appendChild(span);


console.log('Parent of span:', span.parentElement);
