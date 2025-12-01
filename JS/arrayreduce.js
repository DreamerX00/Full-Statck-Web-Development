let data = ["Akash", "Tanisha", "Kunal", "Ayush"];

let age = [23, 23, 22, 24];

console.log(data);
console.log(age);

const message = data.reduce((x, y) => {
  return x + " " + y + ",";
}, "All Names Are : ");

console.log(message);

let avgAge =
  age.reduce((x, y) => {
    return x + y;
  }, 0) / age.length;

console.log("Average age of the data is: " + avgAge);
