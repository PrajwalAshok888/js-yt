const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const lang in myObject) {
    console.log(`${lang}:${myObject[lang]}`);
}

//trying "for in" for arrays
const myArr=[1,2,3,"Prajwal"]
for (const arr in myArr) {
    // console.log(`${arr} index holds ${myArr[arr]}`);
}


const map=new Map()
map.set("IN","India")
map.set("UN","United Nations")
map.set("FR","France")

for (const count in map) {
    // console.log(count);//does not print anything beuase maps are not iterable for "for in"
}