//object constuctors
// const objName=new Object()//these are called as singleton objects
// console.log(objName);

//objects inside objects(nested objects)
const objName={
    age:22,
    userName:{
        fullName:{
            firstName:"Prajwal",
            lastName:"A"
        }
    }
}
// console.log(objName);
// console.log(objName["userName"].fullName["firstName"]);


let obj1={1:"a",2:"b"}
let obj2={3:"a",4:"b",name:["prajwal","A"]}

// const obj3={obj1,obj2}
// console.log(obj3);//this method is of no use

//joining two objects using spread method,assign method
// const obj3=Object.assign(obj1,obj2)//same result//target is obj1 assigned to obj3,sorce->obj2
// console.log(Object.assign(obj1,obj2))//same result//target is obj1,sorce->obj2
// const obj4=Object.assign({},obj1,obj2)//same result//target is defenitly an emoty object assigned obj4,sorce->obj2

// console.log(obj3);
// console.log(obj4);
//using spread
// const obj3 = {...obj1, ...obj2}//same result
// console.log(obj3);

//example ofArray of Objects recieved from database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email

// ===================
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//checks if this key is there in object