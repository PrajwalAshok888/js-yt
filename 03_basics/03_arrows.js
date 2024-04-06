const user={
    username:"prajwal",
    age:22,
    welcomemessage:function(){
        
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomemessage();
//trying to refer this inside a function itself,you cant
// const user={
//     username:"prajwal",
//     age:22,
//     welcomemessage:function(){
//         let username1="tushar"
//         console.log(`${username1}, welcome to website`);
//     }
// }

// user.username="tushar"
// user.welcomemessage();

// console.log(this);//prints empty object in node but in browser prints the context of windows
// function chai(){
//     let username="Prajwal"
//     console.log(username);
// }
// chai()
//=================Arrow functions
// const chai=function(){
//     let username="Prajwal"
//     console.log(username);
// }
// chai()
const chai=()=>{
    let username="Prajwal"
    console.log(username);
}
chai()
//===============implicit return concept
// const addNum=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addNum(2,3,4))

// const addNum=(num1,num2)=>(num1+num2)
// console.log(addNum(2,3))

//to return abject in the similar manner
const addNum=(num1,num2)=>({name:"Prajwal"})
// console.log(addNum(2,3))
