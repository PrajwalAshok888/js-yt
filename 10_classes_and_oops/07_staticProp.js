//we'll talk about the static keyword used in class

class User{
    constructor(username) {
        this.username=username
    }
    static logMe(){
        return `USERNAME is ${this.username}`
    }
}

const user1=new User("Prajwal")
// console.log(user1.logMe());

//now this logMe() function cannot be accessed by child class also

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email

    }

    printEmail(){
        console.log(`Your email is ${this.email}`);
    }
}

const user2=new Teacher("Tushar","Prajwal@gmail.com")
user2.printEmail()
console.log(user2.logMe())//this also prints error as it cannot acces logMe() function since it is static