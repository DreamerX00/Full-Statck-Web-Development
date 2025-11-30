//Array destructuring in JavaScript allows you to unpack values from arrays into distinct variables using a concise syntax.

let nums = [12,39,88,44,"twleve"]

const [akash,vikas,ajeet,suraj,yadav] = nums;

console.log(ajeet);
console.log(yadav);

function dest(){
    return["Akash",true,3939,28.65,'A'];
}

const [username, status,/* this is skipped */ ,score,average, grade] = dest();

console.log(`${username} ${status} ${score}`);