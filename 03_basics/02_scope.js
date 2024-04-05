let c=300

if(true){
    const a=10
    let b=20
    // let c=30
    // console.log("Inner value of c:", c);
}
// console.log(a);
// console.log(b);
// console.log(c);

// =========================================Second part
function one(){
    const username="prajwal"
    function two(){
        let age=22
        console.log(`${username} is of ${age} years`);
    }
    
    // console.log(age);//This will show a error message
    two()
}
// console.log(username); //This will show a error message
// one()

if(true){
    let username="Prajwal"
    if(username!=undefined)
    {
        let age=22
        console.log(`${username} is of ${age} years`);
    }
    // console.log(age);//this displays an error message

}
// console.log(username);//this displays an error message

// ===================interesting===========================
console.log(one(5));
function one(num)
{
    return num+=1
}
// other way to declare a function
console.log(two(4));//in this case this will show an error because of hoisting due to the way the function is declared
const two=function(num1){
    return num1+=1
}
// console.log(two(4));