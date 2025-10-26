const myForm = {
  firstname: "Akash",
  lastname: "Singh",
  age: 23,
  city: "New Delhi",
};

console.log(myForm.firstname);

for (let item in myForm) {
  console.log(myForm[item]);
}

function viewData() {
  console.log("Checking Specified Data");
  for (let item in myForm) {
    myForm[item] = "changed";
    console.log(myForm[item]);
  }
}


//for each method
Object.entries(myForm).forEach(([key, value]) => {
  console.log(`Your Key is : ${key}\nValue is : ${value}`);
});

myForm.firstname = "Tanisha";
myForm.lastname = "Sahu";
myForm.age = "23";
myForm.city = "Varanasi"

//for of method
for(let [key,value] of Object.entries(myForm)){
  console.log(`Key : ${key}\nValue : ${value}`);
}

viewData();

// Function Experssion or Anonymous Function
let newVar = function(a,b){
  return a*b;
}

console.log(newVar(8,8));

//callback function
function displayText(text){
  console.log(text())
}

displayText(function(){
  return "Thsi Is A Callback Message";
});

function showCallfun(fn){
  const value = 10;
  fn(value);
}

function fetchValue(value){
  console.log(value);
}

showCallfun(fetchValue)