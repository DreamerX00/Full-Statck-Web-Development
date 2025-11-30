console.log(
  "This Is Some\
    escape we can use, \
                  that is called as template literals"
);

console.log(
  `${() => {
    for (let item = 0; item < 4; item += 1) {
      console.log(item);
    }
  }}`
);
