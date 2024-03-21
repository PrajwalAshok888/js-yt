// // let firstName="Prajwal"
// // let age =22

// // console.log(firstName+age)

// //string interpolations
// // console.log(`${firstName}${age}`)

// //new way of declaring strins
// let firstName = new String("Prajwal")
// // console.log(firstName)
// // console.log(firstName.__proto__)
// // console.log(firstName[3])
// // console.log(typeof firstName)
// // console.log(firstName.toLowerCase())
// // console.log(firstName.toUpperCase())
// // console.log(firstName)

// //this will not change the original sring because this is a primitive datatype even though its an object
// // let fullName = firstName
// // console.log(firstName)
// // console.log(fullName.concat(" dev"))
// // let firstname="prajwal"
// // console.log(typeof(firstname.length))//number
// console.log(firstName.at(2))
// console.log(firstName.charCodeAt(2))
// // let str1="hello"
// // let str2="hello"
// // let str3="hello"
// // console.log(str1.concat(str1," ",str2," ",str3))
// console.log(firstName.endsWith("l",7))
// console.log(firstName.endsWith("j",4))//second arguement is length
// console.log(`${firstName.includes('m')? 'is':'not'}`)
// console.log(firstName.indexOf('l'))
// console.log(firstName.padEnd(25,'.'))
// console.log('Prajwal..................'.length)
// console.log(firstName.match(/[A-Z]/))//matches regular expression
// // =======================repeat()
// const mood = 'Happy! ';

// console.log(`I feel ${mood.repeat(3)}`);
// // Expected output: "I feel Happy! Happy! Happy! "
// // ============================replace()
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", 'my'));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /Dog/i;
// console.log(paragraph.replace(regex, 'ferret'));
// // Expected output: "I think Ruth's ferret is cuter than your dog!"
// // ======================replaceall()
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replaceAll('dog', 'monkey'));
// // Expected output: "I think Ruth's monkey is cuter than your monkey!"

// // Global flag required when calling replaceAll with regex
// const regex = /Dog/gi;
// console.log(paragraph.replaceAll(regex, 'ferret'));
// // Expected output: "I think Ruth's ferret is cuter than your ferret!"
// // ============================================search()
// const str = "hey JudE";
// const re = /[A-Z]/;
// const reDot = /[.]/;
// console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
// console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation
// // ======================================slice()
// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));
// // Expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str.slice(-4));
// // Expected output: "dog."

// console.log(str.slice(-9, -5));
// // Expected output: "lazy"
// // ====================================split()
// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]
// // ================================================startswith()
// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat'));
// // Expected output: true

// console.log(str1.startsWith('S', 4));
// // Expected output: false
// // =================================substring()
// const str = 'Mozilla';

// console.log(str.substring(1, 3));
// // Expected output: "oz"

// console.log(str.substring(2));
// // Expected output: "zilla"
// // =========================tostring()
// const stringObj = new String('foo');

// console.log(stringObj);
// // Expected output: String { "foo" }

// console.log(stringObj.toString());
// // Expected output: "foo"
// // ========================trim()
// const greeting = '   Hello world!   ';

// console.log(greeting);
// // Expected output: "   Hello world!   ";

// console.log(greeting.trim());
// // Expected output: "Hello world!";
// // ===================trimStart()
// const greeting = '   Hello world!   ';

// console.log(greeting);
// // Expected output: "   Hello world!   ";

// console.log(greeting.trimStart());
// // Expected output: "Hello world!   ";
// // =============================trimEnd()
// const greeting = '   Hello world!   ';

// console.log(greeting);
// // Expected output: "   Hello world!   ";

// console.log(greeting.trimEnd());
// // Expected output: "   Hello world!";
// // ============================================valueof()
// const stringObj = new String('foo');

// console.log(stringObj);
// // Expected output: String { "foo" }

// console.log(stringObj.valueOf());
// // Expected output: "foo"
