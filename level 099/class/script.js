
const ul = document.querySelector('#fruit-container ul');


const orangeLi = document.createElement('li');
orangeLi.textContent = 'Orange';


ul.insertBefore(orangeLi, ul.firstElementChild);

ul.removeChild(ul.lastElementChild);


console.log(ul.firstElementChild.textContent);


const secondLi = ul.children[1];
console.log(secondLi.parentElement.textContent);