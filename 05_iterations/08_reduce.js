//reduce method

const myArr=[1,2,3,4]


//using normal function to understand the working
// const value=myArr.reduce(function (acc,currval){
//         console.log(`accumulator value:${acc} and current value:${currval}`);
//         return acc+currval
// },0)
// console.log(value);


//using arrow function

const value=myArr.reduce((acc,currval)=>acc+currval,0)
// console.log(value);

//shopping cart example

const cart=[{
    language:"Python",
    price:999

},{
    language:"JAVA",
    price:2999
},{
    language:"Javascript",
    price:3999
}]


const total=cart.reduce((acc,price)=>acc+price.price,0)
console.log(total);