/*
n JavaScript, every() and some() are powerful array methods used to test elements against a condition. Here's a clear breakdown:

✅ every() Method
Checks if all elements in an array pass a test.

🔍 some() Method
Checks if at least one element passes a test.

*/

const marks = [88, 44, 39, 55, 82, 73];

let status = marks.every((x) => x > 35);

console.log(`Status Of Passing : ${status}`);

const marks2 = [88, 44, 32, 55, 82, 73];

let status2 = marks2.every((x) => x > 35);

console.log(`Status Of Passing : ${status2}`);

let status3 = marks2.some((x) => x > 35);
console.log(`Status Of At Least One Passed : ${status3}`);


let products = [
    {name : "Checkers", category : "Toys"},
    {name : "Harry Potter", category : "Books"},
    {name : "iPhone", category : "Electronics"},
    {name : "Learn PHP", category : "Books"}
]

let allProductsBooks = products.every((x) => x.category == "Books");
let someProductBooks = products.some((x) => x.category == "Books");

console.log("All Products Books : " + allProductsBooks);
console.log("Some Products Books : "+someProductBooks);

