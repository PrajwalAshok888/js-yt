const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



console.log(user.username)
console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        // console.log(`Welcome ${this.username}`);

    }
//this returns the object

    // return this//this in not required 
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);
// console.log(userTwo.greeting());
//console.log(userTwo);


//new is a constructor function whch creates an emty object or an instane of any object/function/class/promises etc


//step 1:this->creats a new object to put data inside it
//step 2:Constructor function call due to 'new' keyword
//step 3:all the parameters will be injected using 'this' keyword
//step 4:using 'new' u can access the members inside the object 

//instanceof

console.log(userOne instanceof User)