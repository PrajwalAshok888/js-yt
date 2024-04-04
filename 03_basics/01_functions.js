
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
console.log(sayMyName);//references to function,i.e does not print whats in the function but prints 
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);
// Add 2 numbers function with default parameters
// function addTwoNumbers(number1=3, number2=5){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers()

// console.log("Result: ", result);


//Default function of loginUserMessage
// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))


// function loginUserMessage(username){
//     if(!username){
//         console.log("PLease enter a username");
        
//     }
//     else{
//         return `${username} just logged in`
//     }
    
// }

// console.log(loginUserMessage("Prajwal"))
//function to access objects
const price={
    username:"Prajwal",
    price:299
}
function calculateCartPrice(anyobject){
    return `${anyobject.username} has a total price of ${anyobject.price}`
}
// console.log(calculateCartPrice(price))
//function to access objects other way

function calculateCartPrice1(anyobject){
    return `${anyobject.username} has a total price of ${anyobject.price}`
}
// console.log(calculateCartPrice({
//     username:"Tushar",
//     price:999

// }))


function addCartPrice(val1,val2,...num1){
    return num1
}
// console.log(addCartPrice(2,133,224,200,12402))

//function to access arrays
const myNewarray=[131,214,241,141]
function getArray(anyArray){
    return `${anyArray[0]},${anyArray[3]}`
}
// console.log(getArray(myNewarray))
//other way to acces array in functions
console.log(getArray([200,11,111,3,4,2,]))