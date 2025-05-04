
document.getElementById("colorBtn").addEventListener("click", function () {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("colorBox").style.backgroundColor = randomColor;
});


let isFirstImage = true;
document.getElementById("imageBtn").addEventListener("click", function () {
  let img = document.getElementById("myImage");
  if (isFirstImage) {
    img.src = "https://via.placeholder.com/200?text=Image2";
  } else {
    img.src = "https://via.placeholder.com/200?text=Image1";
  }
  isFirstImage = !isFirstImage;
});

document.getElementById("toggleBtn").addEventListener("click", function () {
  let text = document.getElementById("text");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});


let count = 0;
document.getElementById("counterBtn").addEventListener("click", function () {
  count++;
  document.getElementById("counter").textContent = count;
});

document.getElementById("checkBtn").addEventListener("click", function () {
  let radios = document.getElementsByName("quiz");
  let selectedValue = null;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedValue = radios[i].value;
      break;
    }
  }

  let result = document.getElementById("quizResult");
  if (selectedValue === "2") {
    result.textContent = "სწორია! დედაქალაქია თბილისი.";
    result.style.color = "green";
  } else if (selectedValue !== null) {
    result.textContent = "არასწორია. სცადე თავიდან.";
    result.style.color = "red";
  } else {
    result.textContent = "გთხოვ, აირჩიე პასუხი.";
    result.style.color = "orange";
  }
});