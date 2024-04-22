//classes are created in javascript to familiarize oops based pragramming languages in java,c++

// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPass(){
//         return `${this.password}abc`
//     }

//     updateUserName(){
//         console.log(`${this.username="Thushar"}`);
//     }
// }

// const user1=new User("Prajwal","abc@gmaiil.com","Pass1234$")

// // console.log(user1);
// // console.log(user1.encryptPass());
// const user2=new User("Prajwal","abc@gmaiil.com","P4$")
// user2.updateUserName()
// console.log(user2);

//Behind the sceneces classes are basically a function with created prototypes


function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password

}

User.prototype.encryptPass=function(){
    return `${this.password}abc`
}

User.prototype.updateUserName=function(){
    console.log(`${this.username="Thushar"}`);
}

const user2=new User("Prajwal","abc@gmaiil.com","P4$")
user2.updateUserName()
console.log(user2);