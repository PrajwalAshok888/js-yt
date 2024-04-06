// IIFE Imediately Invoked Function Expressions
//Normal function
// function chai(){
//     console.log(`DB Connected`);
// }
// chai()
//IIFE function(named IIFE)
// (function chai(name){console.log(`DB Connected ${name}`);})("Prajwal");
// IIFE arrow function
((name)=>{console.log(`DB connected ${name}`);})("Prajwal")