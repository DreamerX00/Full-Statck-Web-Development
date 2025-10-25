console.log("Hello, JavaScript!");
console.warn("This is A Warning from console.warn");
console.clear();
console.log(8 + "8");

//This A Comment

/*Multiline Comment */
console.log("Hi");

//Variables

let username;
username = "Akash";
console.log(username);

var gender;
gender = "male"
console.warn(gender);

let counter = 0;
counter++;
counter++;
counter++;
counter++;

counter += counter++ - counter-- + counter++ + ++counter + --counter;

console.log("Count Is : "+counter);

console.log(2**4); //power of 2^4

//Equality Operatorts
// === Strict Equality (type + value)
// !== Strict non-equality
// == lose equality (value)
// != lose non-equality

console.log(10 == 10);
console.log(10 != "10");
console.log(10 === 10);

//Strings in js
console.log("   Akash Singh   ");
let username2 = "akash Singh";
console.log("Hello "+ username2)

console.log(username2.length);
console.log(username2.concat(" Is An Mca Student"));
console.log(username2.toLocaleLowerCase());
console.log(username2.toUpperCase());
console.log(username2.toWellFormed());

console.log(username2.slice(0,8));

console.log(username2.split("s"))
console.log(username2.split(" ").join("-").toUpperCase());

console.log(username2.trim());

let city = "New Delhi";
let state = "Delhi";

console.log(`${city} is located in ${state}`);

