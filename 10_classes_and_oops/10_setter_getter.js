//lets sa u want to change the return of a class 

// class user{
//     constructor(username,password) {
//         this.username=username
//         this.password=password
//     }

// }
// const user1=new user("Prajwal","Pass1234$")
// console.log(user1.username);
//this is normal

//to change the output from class

class user{
    constructor(username,password) {
        this.username=username
        this.password=password
    }
    get password(){
        return `${this._password}abc`
    }
    set password(value){
        // this.password=value  //this will not work because of race condition so use different variable
        this._password=value//must use _ only
    }

    get username(){
        return this._username.toUpperCase()
    }
    set username(value){
        this._username=value
    }

}
const user1=new user("Prajwal","Pass1234$")
console.log(user1.password);
console.log(user1.username);




//this was the new format initially getters and setters were set using function since class are practically new ,to undersand go to file 11
