//some of the properties of an ocject cannot be chaged of some objects cannot be iterable this is because the proprties inside the objects have some set values(writeble,enumerable,iterable and value) either true or false

//eg to change the value of pi (p.s u cant)


// console.log(Math.PI);
Math.PI=4
// console.log(Math.PI);//u cant change value

//to see y not

// console.log(Object.getOwnPropertyDescriptor(Math,"PI")); 
//output
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

//similarly u can also change ur property vlaues

const object={
    name:"Prajwal",
    age:23,
    hobby:"Vollyball"

}
// console.log(Object.getOwnPropertyDescriptor(object,"hobby"));
// console.log(Object.getOwnPropertyDescriptors(object,"hobby","name"));

Object.defineProperty(object,"name",{
    writable:false,
    value:"Tushar",
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptors(object,"hobby","name"));

//this is why some objects cannot be looped because its property(property) values will be set to false

// for Example

const object1={
    name:"Prajwal",
    age:23,
    hobby:"Vollyball",
    hello:function(){
        console.log("Chai aur javascript");
    }

}

for (let [Key,value] of Object.entries(object1)) {
    if(typeof value!=='function'){
        console.log(`${Key}:${value}`);
       }
    
}

// say u dont want to iterate name

Object.defineProperty(object1,"name",{
    // writable:false,
    enumerable:false
})
for (let [Key,value] of Object.entries(object1)) {
    if(typeof value!=='function'){
        console.log(`${Key}:${value}`);
    }
}//in this the name is not printed