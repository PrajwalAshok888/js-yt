//function based defining getters and setters

function user(username,password){
    this._passwordpassword=password
    this._username=username

    Object.defineProperty(this,"password",{
        get:function(){
            return `${this._password}abc`
        },
        set:function (params) {
            this._password=params
        }
    })
}

const user1=new user("Prajwal","pass1234$")
console.log(user1.password);