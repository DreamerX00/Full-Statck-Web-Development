let num = 1;

setInterval(() => {
  for (let i = 0; i < 4; i++) {
    console.log(`I Am a Set Intervale : ${(num += 1)}`);
  }
}, 5000); // executes every 10 second

setTimeout(() => {
  for (let i = 10; i < 80; i++) {
    console.log(`I Am a Set Timeout : ${(num += 1)}`);
  }
}, 5000); // execute once after a certain time
