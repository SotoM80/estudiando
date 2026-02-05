/* 1 */


/* let */

let y = 10;
let myName = 'jenny';
myName = 'tom'

console.log(y);
console.log(myName);

let test2 = 'hello';
if (true){
   console.log(test2); 
}

/* const 
(no puede ser redeclarada)
(previene modificaciones accidentales)
*/

const z = 10;
console.log(z);



/* 2 */

/* DATA TYPES */

let age = 32; /* number */
let place = "beach"; /* string */
let warm = true; /* boolean (true or false) */
let drink = null; /* null(nothing) */
let thirsty; /* undefined */


/* STRING */

let singleQuote = 'Hello, World!';
let doubleQuote = " JavaScript is fun!";
let templateLiteral = `I have ${2 + 3} apples`;/* usando variables dentrp del string */
 
console.log(singleQuote);
console.log(doubleQuote);
console.log(templateLiteral);

/* Characters in a string */

let singleCharacter = 'A';
let numberInString = '5';
let spaceCharacter = '';
let sentence = 'Hello, how are you?';

console.log(singleCharacter);
console.log(numberInString);
console.log(spaceCharacter);
console.log(sentence);

/* String concatenation (joining stings together) */

let firstName = "Alice";
let lastName = "soto";
/*let fullName = firstName + ' ' +lastName;*/

console.log();

let fullName = `${firstName} ${lastName}`;/* using templates literals (better way) */
console.log(fullName);

/* Special String Features */

let quote = 'She said, "JavaScript is awesome!"';
let escapeExample = "I\'m a developer";

console.log(escapeExample);

let message = "Hello";
console.log(message.length);/* getting the length of a string */

/* 3 */
/* BOOLEAN
(false or true) */

let isRainig = true;
let isSunny = false;

console.log(isRainig);

/* logical Operations (Making Decicions) */

/*
&&(And) Both conditions must be true (true && false) = false
!(Not) Reverses the boolean valeu (!true = false)
*/

let hasMoney = true;
let isStoreOpen =false;

if (hasMoney && isStoreOpen) {
    console.log('you can buy something!');
} else {
    console.log('come back later.');
}

let hasNoMoney = !hasMoney;
console.log(hasNoMoney);