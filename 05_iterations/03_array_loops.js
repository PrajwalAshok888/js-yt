// for of
const array=[1,2,3,4,5,"Prajwal",{firstName:"Prajwal",lastName:"A"}]
for (const i of array) {
    // console.log(i);
}
// regular for
// for (let index = 0; index < array.length; index++) {
//     console.log( array[index]);
    
// }
// for strings
const greetings="Hello world!"
for (const greet of greetings) {
    
    // console.log(`Message:${greet}`);
}
//eg: to skip the space in hello world
// for (const greet of greetings) {
//     if(greet==" ")
//     {
//         continue
//     }
//     console.log(`Message:${greet}`);
// }

// Maps
const map=new Map()
map.set("IN","India")
map.set("UN","United Nations")
map.set("UN","United Nations")//This will not print becuse everyhing is same as the above one
map.set("FR","France")
map.set("FR","France1")//this will print even though the key name is same becuase of the order and the value is different
map.set("FRR","France1")//this will also print because key is different even if the value is same
console.log(map);


// simple for of for maps
for (const iterator of map) {
    console.log(iterator);
}
//for offor separate key and value
for (const [i,j] of map) {
    // console.log(`${i} :- ${j}`);
}
