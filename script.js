'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const {name, openingHours, categories} = restaurant

// // console.log(name, openingHours, categories);

// //nested objects

// const {fri : {open, close }} = openingHours;
// console.log(open, close);

// const arr = [3,4,5]

// const newarr = [1, 2, ...arr]
// console.log(newarr);


// const joinedArrays = [...restaurant.categories, ...restaurant.mainMenu]

// console.log(joinedArrays);


// restaurant.numguest = 0;
// const guest = restaurant.numguest ?? 10;
// console.log(guest);


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu);

// for (const item of menu.entries()) console.log(item);
// for (const [number, text] of menu.entries()) console.log(`${number}: ${text}`);


// const toukir = new Set(['toukir','toukir','toukir','toukir','toukir','toukir',])

// console.log(toukir);


// const rest = new Map();
// rest.set('name', "classico")
// rest.set(1, "Italy")
// rest.set(2, "Portugal")



// console.log(rest);

const bookings = []


const createBooking = function(flightNum, munPassengers = 1, price = 199){
  // munPassengers ||= 1;
  // price ||= 199
  const booking = {
    flightNum,
    munPassengers,
    price
  }

console.log(booking);
bookings.push(booking)

}

createBooking('LH123', 72, 139)


const oneWord = function(str){
  return str.replace(/ /g, "").toLowerCase();
}

const uppwefWord = function(str){
  const [first, ...other] = str.split(''); 
}