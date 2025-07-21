function fruit(){
    console.log(name);//undefined as hoisting rule make var declaration not initializtion
    // console.log(price); price not define error
    
    // let price = 20; give error because of hoisting rule;
    var name = "apple";
}

fruit();

// for(var i = 0; i < 3; i++){
//     setTimeout(() => console.log(i), 1);
// }

// for(let i = 0; i < 3; i++){
//     setTimeout(()=>console.log(i),1);
// }

console.log(+true);
console.log(typeof(+true));

console.log(!"anil");
console.log(typeof("anil"));


let data = "size";
const bird = {
    size : "small",
};

console.log(bird[data]);
console.log(bird["size"]);
console.log(bird.size);
console.log(bird.data);

let c = {name : "peter"}
let d;
d = c;
c.name = "akash";
console.log(d.name);

var x;
var x = 10;
console.log(x);

var x;
// let x = 10; this will give error as x is already declared in global scope.
console.log(x);

let a = 3;
let b = new Number(3);
console.log(a == b);
console.log(a === b);


let name;
nmae = {};
console.log(name);

function fruit(){
    console.log("Hello");
}
fruit.name = "World";

fruit();

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,"2"))


let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

function getAge(...args){
    console.log(typeof args);
}

getAge(21);


function getAge(){
    // 'use strict';make it strict like typescript, hoisting not allowed
    age = 21;
    console.log(age);
}
getAge();

const sum = eval(10*10+"5");
console.log(sum);

// sessionStorage.setItem('cool_secret',123);

const obj = {1:"a",2:"b",3:"c"};

console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));

const obj1 = {a : "one", b:"two", a:"repeat"};

console.log(obj1);

for(let i = 1; i < 5; i++){
    if(i === 3) continue;
    console.log(i);
}

const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();


