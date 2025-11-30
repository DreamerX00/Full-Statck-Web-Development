//let's reduce code

function user(username, age) {
  return {
    username: username,
    age: age,
  };
}

// Same but reduced due to enchanced literals
function user2(username, age) {
  return {
    username,
    age,
  };
}

console.log(user("Akash", 23));
console.log(user2("Akash", 23));

// Function Inside Function
function checkOut(username) {
  return {
    welcomeMessage: () => {
      console.log(`Welcome ${username}\
        Time : ${new Date}`);
    },

    checkOutMessage: () => {
      console.log(`Thank You For Visiting ${username}\
        Time : ${new Date}`);
    },
  };
}
const checkout1 = checkOut("Akash");
checkout1.welcomeMessage();

setTimeout(() => {
  checkout1.checkOutMessage();
}, 4000);
