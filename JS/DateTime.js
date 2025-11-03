const currentDate = new Date();
console.log(currentDate);

const newDate = new Date(2024, 2, 24, 12, 30, 0, 0);
console.log(newDate);

const newDateYear = newDate.getFullYear();
console.log(newDateYear);
console.log(newDate.getMonth());

console.log(`Year : ${new Date().getFullYear()}`);
console.log(`Month : ${new Date().getMonth()}`);
console.log(`Day : ${new Date().getDay()}`);
console.log(`Hour : ${new Date().getHours()}`);
console.log(`Minute : ${new Date().getMinutes()}`);
console.log(`Second : ${new Date().getSeconds()}`);
console.log(`MilliSecond : ${new Date().getMilliseconds()}`);


console.log(new Date().toDateString());
console.log(new Date().getHours().toLocaleString());

