//the problem of 'this' is that it cannot refer to a parent function instead it will refere to the globoal context

//hence we use call function for example

function setUsername(username){
        //some complex instructions to check whether this username exist in DB
        this.username=username
}

function createUser(username,email,passworrd){
    setUsername.call(this,username)//initially before using call the execution cantext of setUsername would assigne the username to username and would exit the call stack,but the use of 'call' keyword allos to retain its reference
    this.email=email
    this.passworrd=passworrd
}

const user1=new createUser("Prajwal","prajwal@google.com","Pass1234$")

console.log(user1);