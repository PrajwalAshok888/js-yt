// let myDate=new Date()
// // console.log(myDate)
// // console.log(myDate.toString())
// // // console.log(myDate.getDate())
// // // console.log(myDate.getFullYear())
// // // console.log(myDate.getMonth())
// // console.log(myDate.toDateString())
// // // console.log(myDate.toISOString())
// // // console.log(myDate.toJSON())
// // console.log(myDate.toLocaleDateString('en-IN'))
// // console.log(myDate.toLocaleString())

// // let newDate=new Date(2023,0,11)// this is the only way yy/mm/dd
// // let newDate=new Date(2023,0,11,22,13)
// // let newDate=new Date("01-22-2023")
// let newDate=new Date("2024-04-22")
// // console.log(newDate.toLocaleString());
// let nowDate=Date.now()
// console.log(nowDate)//in milliseconds till now
// // console.log(nowDate/1000)//in seconds till now
// console.log(newDate.getTime())
const newDate=new Date(2024,0,21,21,5)
console.log(newDate.toLocaleString())
newDate.toLocaleString('default',{
    // day: '2-digit',
    // hourCycle:"h24"
})
console.log(newDate.toLocaleString())
