const map = new Map();

map.set("Name","Akash")
map.set('age',23)
map.set('location',"Delhi")
map.set('designation',"FreeLancer")

console.log(map);

console.log(map.keys());
console.log(map.values());

map.delete("location");
console.log(map);

console.log(map.size);
 

(function(){
    for(let [keys,values] of map){
        console.log(`${keys} --> ${values}`);
    }
})();


const map2 = new Map([
    ['a',1],
    ['b',2],
    ['c',3]
]);

console.log(map2.get('a'));
console.log(map.size);
console.log(map2.delete('b'),map2.size);