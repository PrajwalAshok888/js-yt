//2 types of object declaration constructors(singleton objects) and literals
//object constructor
// Object.create(JsUser)

const mySymbol = Symbol("Key1")
//object literals
const JsUser={
    name:"Prajwal A",
    age:22,
    isLoggedIn:true,
    daysActive:['Monday','Tuesday','Saturday'],
    "First name":'Prajwal',
    [mySymbol]:'Hello'
}
// console.log(JsUser);
// console.log(JsUser["age"]);
// console.log(JsUser["daysActive"][2]);
// console.log(JsUser["First name"]);
// console.log(JsUser[mySymbol]);

JsUser["name"]="Tushar"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser["name"]="Prajwal A"
// console.log(JsUser);

//other way to add members to objects
JsUser.lastName="A"
console.log(JsUser);

//add function to same object
JsUser.greetings=function(){
    console.log('Hello world')
}
console.log(JsUser.greetings())//always use . to access functions from objects

//using this keyword
JsUser.greetings2=function(){
    console.log(`Hello world, ${this.name}`)
}
console.log(JsUser.greetings2())
Object.freeze(JsUser)