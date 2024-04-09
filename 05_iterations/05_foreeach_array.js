const language=["python","js","java","c++"]

// using normal function

// language.forEach( function (lang) {
//     console.log(lang);
// } )//callback functio does not need a 


// using arrow function

// language.forEach((lang)=>{
//     console.log(lang);
// })


//using without callback

function print(name){
    // console.log(name);
}

language.forEach(print)

// using multiple parameters in "forEach"

language.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
} )



// accessing object-> values-> inside arrays
const myARR=[{
    codeName:"python",
    extension:"py"
},{
    codeName:"java",
    extension:"java"
},{
    codeName:"javascript",
    extension:"js"
}]

myARR.forEach( (item)=>{
    // console.log(item.codeName);
} )