// array

const myArr = [1,3,4,2,5]
const myHeors = ["shaktiman", "naagraj"]
// console.log(myArr[5]);
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);//[ 2, 1, 3 ]

// Array methods

myArr.push(6,7)
// myArr.push(7)
console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.unshift(0,9,8)
// console.log(myArr);
// [ 1, 3, 4, 2, 5 ]
// [
//   0, 9, 8, 1,
//   3, 4, 2, 5
// ]


// myArr.shift()//[ 1, 3, 4, 2, 5 ]
            // [ 3, 4, 2, 5 ]
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr.slice(2,-1));
// console.log(myArr);

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);