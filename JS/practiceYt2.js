const str = "hi my name is akash";

let output = {};

for(let x of str){
    if(output[x]){
        output[x] += 1;
    }else{
        output[x] = 1;
    }
}

console.log(output);

const data = 100;
console.log(data.toString());
// console.log(100.toString()); this will throw error to fix it we can do
console.log(100..toString());
console.log((100).toString());

let num = 20;
console.log(num+"20");
console.log(++num);

function magic(){
    return cosmic = 1000;
}

console.log(magic());

let person = {name: "Norem Red"};
const members = [person];
person = null;

console.log(members);

const isNumberEqual = 108 == ['108'];
console.log(isNumberEqual);

var obj = {};
if (obj && obj.data && obj.data.person && obj.data.person.name){

}//instead of this we can use a method called (optional Chaining)

if(obj?.data?.person?.name){

}

console.log([1,10,3,20].sort((a,b) => a - b));

let newArr = [1,[2,[3,[[[4,[5]]]]]]].flat().toString();
console.log(newArr);

console.log(parseInt("108"));
console.log(parseInt("108*200"));
console.log(parseInt("108Wonders"));

let a = 100;
let b = 200;

[a,b] = [b,a];

console.log(a,b);

console.log(80_00_000);

const myFunc = ({x,y,z}) => {
    console.log(x,y,z);
};

myFunc(1,2,3);

const name = 'Akash';
age = 21;

console.log(delete name);
console.log(delete age);