function comprehensiveArrayTask(arr1, arr2, arr3) {
   
    let mergedArray = arr1.concat(arr2);

    mergedArray.copyWithin(5, 0, 3);
    
   
    mergedArray.fill(0, 6);
    

    mergedArray.pop();
    

    mergedArray.shift();
    
   
    mergedArray.unshift(100, 200);
    

    mergedArray.splice(2, 2, ...arr3);
    

    let slicedArray = mergedArray.slice(-5);
    

    return slicedArray.join(',');
}



let students = ["Alice", "Bob", "Charlie"];
let grades = [90, 85, 88];


function addStudent(studentName, grade) {
    students.unshift(studentName);
    grades.unshift(grade);
    return { updatedStudents: students, updatedGrades: grades };
}

function removeLastStudent() {
    students.pop();
    grades.pop();
    return { updatedStudents: students, updatedGrades: grades };
}

function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade);
    return grades;
}


function updateGrades(newGrade) {
    grades.fill(newGrade);
    return grades;
}


let playlist = ["Song A", "Song B", "Song C"];


function addSong(songTitle) {
    playlist.unshift(songTitle);
    return playlist;
}


function removeLastSong() {
    playlist.pop();
    return playlist;
}


function moveSongs() {
    playlist.copyWithin(playlist.length, 0, 2);
    playlist.length = playlist.length + 2; // Ensure length is updated after copyWithin
    return playlist;
}


function combinePlaylists(secondPlaylist) {
    let combinedPlaylist = playlist.concat(secondPlaylist);
    return combinedPlaylist;
}


let cartItems = ["Apple", "Banana", "Carrot"];
let prices = [1.5, 0.8, 1.2];


function addItem(item, price) {
    cartItems.unshift(item);
    prices.unshift(price);
    return { updatedCartItems: cartItems, updatedPrices: prices };
}


function removeFirstItem() {
    cartItems.shift();
    prices.shift();
    return { updatedCartItems: cartItems, updatedPrices: prices };
}


function replaceItem(index, newItem, newPrice) {
    cartItems.splice(index, 1, newItem);
    prices.splice(index, 1, newPrice);
    return { updatedCartItems: cartItems, updatedPrices: prices };
}


function createReceipt() {
    return cartItems.join(", ");
}


function applyDiscount(discountPrice) {
    prices.fill(discountPrice);
    return prices;
}

