// const arr=[1,2,3,4,5,6]

// // for (const i of arr) {
// //     console.log(i);
// // }

// // for(let i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i]);
// // }


// let string="Hello World!"
// for (const i of string) {
//     if(i===" "){
//         continue
//     }
//     // console.log(i);
// }

// const map=new Map()
// map.set("IN","India")
// map.set("PK","Pakistan")
// console.log(map);
// for (const [i,j] of map) {
//     console.log(i,j);
// }



// for (const key in arr) {
    // console.log(arr[key]);
// }

// const obj={
//     name:"Prajwal",
//     usn:"064"
// }
// for (const key in obj) {
//     console.log(obj[key]);
// }
const arr=[1,2,3,4,5]

const total=arr.map((i)=>{
    return i[3]
})
console.log(total);