let myDiv = document.getElementById('myDiv');

function increaseSize() {
  myDiv.classList.remove('small');
  myDiv.classList.add('big');
}

function decreaseSize() {
  myDiv.classList.remove('big');
  myDiv.classList.add('small');
}