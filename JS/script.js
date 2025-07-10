console.log("Akash Singh","\nI Love Coding");

console.log(45*2-10);

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getTimezoneOffset());

var firstName = "Akash";
var lastName = "Singh";

console.log(firstName + " " + lastName);

var a = 88;
console.log(a,++a);

console.error("Used For Error");

console.log(15*15);

console.log(typeof(typeof(typeof(1))));

var age = 8;
if(age >= 18) {
    console.log("Your Age Is Correct");
}else{
   console.log("Your Age Is Not Valid"); 
} 

console.log(100/0);
console.log(typeof(100/0));

const PI = Math.PI;
console.log(PI);

let newVar = 33;

console.log(typeof(null));

var checktype = 33;
console.log(typeof(checktype));

let v1 = "new", v2 = 88, v3 = true;

console.log(typeof v1, typeof v2, typeof v3);

let undef;
console.log(undef);

let def = undefined;
console.log(typeof def);

console.log(typeof NaN);

const arr = [12,3];

console.log(arr[1]);
console.log(++arr[1]);

for (let i = 1; i <= 50; i++){
    console.log(i);
}

var sum = 0;
var count = 0;
while(count <= 10){
    sum+=count;
    count++;
}
console.log(sum);

let str = "Akash Singh";
for(let char  of str){
    console.log(char);
}

let myArr = [1,2,3,4,5];

let fIndex = 0;
let lIndex = myArr.length-1;

while(fIndex != lIndex){
    let temp = myArr[fIndex];
    myArr[fIndex] = myArr[lIndex];
    myArr[lIndex] = temp;

    fIndex++;
    lIndex--;
}

console.log(myArr);

for(let i = 0; i <= 100; i++){
    if(i %5 == 0){
       console.log(i); 
    }
    
}

var myObj = {
    name : "Akash",
    email : "Example@gmail.com",
    age : 23
}

console.log()