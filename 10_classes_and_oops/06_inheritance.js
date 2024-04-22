class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        return `USERNAME is ${this.username}`
    }
}

class Teacher extends User{
    constructor(username,email,password) {
        super(username)//this takes the username declaration functionality from parent class
        this.email=email
        this.password=password
        
    }

    addCourse(){
        return ` A new course was added by ${this.username}`
    }
}

const chai=new Teacher("Prajwal","prajwal@gmail.com","Pass1234$")
console.log(chai);
console.log(chai.addCourse());
console.log(chai.logMe());

const tea=new User("Tushar")
console.log(tea.logMe());
// console.log(tea.addCourse());//this wont work because user is not inherited from teacher class because it is vice versa

