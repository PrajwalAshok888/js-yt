const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log(accountId,accountEmail,accountPassword,accountState,accountCity)
// let firstName="Prajwal"
// let lastName="A"
// let email="pythor666@gmai.com"
// let password="Pass1234$"
// let county="India"
// let state="Karnataka"
// let isGoogleLoggedIn=true
// let age=33

// console.table([firstName,lastName,email,password,county,state,isGoogleLoggedIn,age])

let listingPrice=799
let sellingprice=199
let discountPercentage=((listingPrice-sellingprice)/listingPrice)*100
console.log(`${Math.round(discountPercentage)}% OFF`);