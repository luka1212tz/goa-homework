let images = [
    "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s",
    "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg"
];

let num = 0;


function next() {
    let slide = document.querySelector("img");

    num++;
    if(num >= images.length){
        num = 0;
    };

    slide.src = images[num];
}



function prev() {
    let slide = document.querySelector("img");

    num--;
    if(num < 0){
        num = images.length - 1;
    };

    slide.src = images[num];
};

