//2 types of object declaration constructors(singleton objects) and literals
//object constructor
// Object.create(JsUser)


//object literals
const mySymbol = Symbol("Key1")
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
// console.log(JsUser["First name"]);//there is no other way to access these
// console.log(JsUser[mySymbol]);//there is no other way to access these

JsUser["name"]="Tushar"//canged the value of name key in object
// console.log(JsUser);
// Object.freeze(JsUser)//does not allow any changes
JsUser["name"]="Prajwal A"//changed it back to original
// console.log(JsUser);

//other way to add members to objects
JsUser.lastName="B"
JsUser["mother name"]="shantala"
// console.log(JsUser);
//add function to same object
// JsUser.greetings=function(){
//     JsUser["Father name"]="Ashok"
//     console.log('Hello world')
// }
// console.log(JsUser.greetings())//always use . to access functions from objects

//using this keyword
// JsUser.greetings2=function(){
//     console.log(`Hello world, ${this.name}`)
// }
// console.log(JsUser.greetings2())
// Object.freeze(JsUser)
console.log(JsUser);
//adding symbols in other way
const mySymbol2=Symbol("key2")
JsUser[mySymbol2]="World"
console.log(JsUser);

const Array=[1,2,3,4]
JsUser.myArray=Array
console.log(JsUser);