//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
// myFunction()
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// console.log(typeof myFunction)
// console.log(typeof score)
// console.log(typeof isLoggedIn)
// console.log(typeof outsideTemp)
// console.log(typeof userEmail)
// console.log(typeof id)
// console.log(typeof heros)
// console.log(typeof myObj)
// =============================================
// Stack->Primitive    Heap->Non Primitive
let userName="hello"
let adddedName=userName//here the copy of userName is assigned
// console.log(userName)
// console.log(adddedName)

adddedName="Prajwal";
// console.log(userName)
// console.log(adddedName)//modification of the copy is displayed

let sell = {
    email:"pythor@gmail.com"
}
let buy=sell//here the reference(address) of the sell memory is assigned

console.log(sell,buy)
buy.email="prajwala.2020@vemanait.edu.in"
console.log(sell,buy)