
const hotel = {
    hotelName: "Grand Tbilisi Hotel",
    stars: 5,
    location: "Tbilisi, Georgia",
    guestReviews: {
        guest1: "Amazing service and clean rooms!",
        guest2: "Great location but a bit expensive.",
        guest3: "Friendly staff and excellent breakfast!"
    }
};


console.log("Hotel Properties and Values:");
for (let key in hotel) {
    console.log(`${key}:`, hotel[key]);
}

console.log("Has spa property?", hotel.hasOwnProperty("spa"));


const updatedHotel = { ...hotel, roomsCount: 120 };
console.log("Updated Hotel:", updatedHotel);


Object.freeze(updatedHotel);


updatedHotel.hotelName = "Luxury Palace Hotel";
updatedHotel.roomsCount = 150;
console.log("After attempting modifications:", updatedHotel);


console.log("Is object frozen?", Object.isFrozen(updatedHotel));










// სპორტული კლუბის ობიექტის შექმნა
const sportsClub = {
    clubName: "Dinamo Tbilisi",
    sportType: "Football",
    foundedYear: 1925,
    achievements: {
        title1: "Soviet Top League - 1964",
        title2: "UEFA Cup Winners' Cup - 1981",
        title3: "Georgian League - Multiple times"
    }
};


console.log("Sports Club Properties:", Object.keys(sportsClub));


console.log("Sports Club Values:", Object.values(sportsClub));


console.log("Has sponsors property?", sportsClub.hasOwnProperty("sponsors"));

const updatedSportsClub = { ...sportsClub, stadiumCapacity: 55000 };
console.log("Updated Sports Club:", updatedSportsClub);


Object.freeze(updatedSportsClub);


updatedSportsClub.clubName = "Locomotive Tbilisi";
updatedSportsClub.stadiumCapacity = 60000;
console.log("After attempting modifications:", updatedSportsClub);

console.log("Is object frozen?", Object.isFrozen(updatedSportsClub));


const hoteli = {
    hotelisName: "Grand Tbilisi Hotel",
    stars: 5,
    location: "Tbilisi, Georgia",
    guestReviews: {
        guest1: "Amazing service and clean rooms!",
        guest2: "Great location but a bit expensive.",
        guest3: "Friendly staff and excellent breakfast!"
    }
};


console.log("Hotel Properties and Values:");
for (let key in hoteli) {
    console.log(`${key}:`, hoteli[key]);
}

console.log("Has spa property?", hotel.hasOwnProperty("spa"));


const updatedHotel = { ...hoteli, roomsCount: 120 };
console.log("Updated Hotel:", updatedHotel);


Object.freeze(updatedHotel);


updatedHotel.hotelisName = "Luxury Palace Hotel";
updatedHotel.roomsCount = 150;
console.log("After attempting modifications:", updatedHotel);


console.log("Is object frozen?", Object.isFrozen(updatedHotel));


