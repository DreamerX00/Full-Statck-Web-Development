newArrowFunction = (user) => `Hello ${user}`;

console.log(newArrowFunction("Akash"));

totalSum = (...nums) => {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
};

console.log(totalSum(1, 2, 4, 88));

setTimeout(() => {
  console.log("This");
  setTimeout(() => {
    console.log("is");
    setTimeout(() => {
      console.log("how");
      setTimeout(() => {
        console.log("you");
        setTimeout(() => {
          console.log("start");
          setTimeout(() => {
            console.log("entering");
            setTimeout(() => {
              console.log("in Nested Callback Timeouts");
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
