// const promiseOne=new Promise((resolve,reject)=>{
//     //DB calls,
//     //async function,network calls etc  
//     setTimeout(()=>{
//         console.log("async1 completed");
//         resolve()
//     },1000)
// })
// promiseOne.then(()=>{
//     console.log("Promise consumed");
// })

//other way without creating a variable
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async 2 task");
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Async task 2 completed");
// })

/////////////

// const promiseThree=new Promise((resolve,reject)=>{ 
//     setTimeout(()=>{
//         console.log('Some data retreval operation');
//         resolve({username:"Prajwal",USN:"1VI20IS064"})
//     },1000)
    
// })

// promiseThree.then((data)=>{
//     console.log(data);
//     console.log('Data recieved');
// })

/////////
//about reject concept and finally concept
// const promiseFour=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     let error=false
//     if(!error){
//         resolve({username:"Prajwal",USN:"1VI20IS064"})
//     }
//     else{
//         reject("ERROR:Something went wrong")
//     }
//     },1000)
// })

// promiseFour.then((data)=>{
//     console.log(data);
//     return data.username
// }).then((username)=>console.log(username))
// .catch((err)=>{console.log(err);})
// .finally(()=>{
//     console.log("Promised is finished ,it either got resolvd or rejected");
// })

/////////////

//using async await instead of .then and .catch

// const promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//         if(!error){
//             resolve({username:"Javascript",USN:"1VI20IS064"})
//         }
//         else{
//             reject("ERROR:JS went wrong")
//         }
//         },1000)
// })


// async function consumePromiseFive(){
//     try {
//         const response=await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

////////////////taking about fetching api using async await and .then and .catch

// async function apiResponse(){
//     const response=await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data=await response.json()
//     console.log(data);
// }

// apiResponse()


//same as above but using trycath
// async function apiResponse(){
//     try {
//         const response=await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// apiResponse()

//now using .then and .catch

//since fecth will return promise we dont need to create a instance of promise

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data.login);
// })
// .catch((error)=>console.log(error))