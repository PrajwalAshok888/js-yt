const myArray=[1,2,3,4,5,6,7,8,9,10]

//forEach

// myArray.forEach((bk)=>{console.log(bk+10); })

// map method:-same as forEach but returs the value

const values=myArray.map((bk)=>bk+10)
console.log(values);

//chaining of the methods

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);