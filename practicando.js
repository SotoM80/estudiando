/* 1 */


/* let */

let y = 10;
let myName = 'jenny';
myName = 'tom'

console.log(y);
console.log(myName);

let test2 = 'hellos';
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

let nombreAmigo ='carlos';
let apellidoAmigo = 'johannes';

let nombreacaompleto = `${nombreAmigo} ${apellidoAmigo}`;
console.log(nombreacaompleto);

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


/* 4- CONDITIONS & LOOPS */

/*let result = 1+2;
document.getElementById(output).innerHTML = result;*/
let text = "no garlic in carbonara!";
console.log(text);

/* Conditions */

if (10 > 3) {
    console.log('yes this is true');
}

if (3 > 10) {
    console.log('yes this is true');
} else {
    console.log('this is not true');
}

if (3 > 10){
console.log('yes this is true');
} else if (10 > 3){
console.log('second is true');
}

/* Logical Operators */

/* && (and) */
if (true && true){
console.log(true);
}

/* || (or) */
if (true || false){
console.log(true);
}

/* ! (Not) */
if(!false){
    console.log(true);
}

if (60 > 50 && 60 < 100){
    console.log('mayor que 50, pero menor que 100');
}

if (40 < 50 || 40 > 100){
    console.log('menor que 50, pero no mayor que 100');
}

if (60 != 60){
    console.log('nos son iguales');
} else {
    console.log('se parecen');
}


/* Loops for and while */


let i = 0;
while ( i < 10){
    console.log(i);// es bueno cuando no sabes el numero de iteracion(repeticion)
    i++;
}


for (let i = 0; i < 5; i++) {
  console.log("Vuelta número: " + i);// es bueno cuando ya sabes el numero de iteracion 
}

for (let a = 0; a < 15; a++) {
    console.log(a);
}

for (let b = 0; b < 15; b += 2) {
    console.log(b);
}// incrementa en numeros pares

for (let b = 10; b > 0; b-- ) {
    console.log(b);//logs en reversa de 10 a 1
}

for (let i = 0; i < 20; i++) {
  // Si el índice es par, muestra 'A', si es impar, muestra 'B'
  if (i % 2 === 0) {
    console.log("A");
  } else {
    console.log("B");
  }
}

for (let l = 0; l < 10; l++) {
  // Si el índice es par, muestra 'A', si es impar, muestra 'B'
  if (l <= 4) {
    console.log("A");
  } else {
    console.log("B");
  }
}

for (let n = 0; n < 10; n++){
    console.log(n);
}

let list = "<ul>";
for (let f = 0; f < 10; f++) {
    list += "<li>" + f + "</li>";
}
list += "</ul>";
document.getElementById("output").innerHTML = list;

let answer = ""
while (answer =="") {
    answer = prompt("what's your name", " ");
}
console.log(answer);


//  (5) String Methods

//substring
const str = 'One two three four';
console.log(str.substring(4, 7));
console.log(str.substring(14, 18));

const nam = 'perro loco ñoco';
console.log(nam.substring(6, 10));
console.log(nam.substring(11, 15));

//includes
//returns if a substring is present in a larger one.
const browserType = "mozilla";
if (browserType.includes("zilla")){
    console.log("found zilla");
} else {
    console.log("No zilla here");
}

//indexOf
//finds the position of a substring
const tagline = "Redi school of digital integration";
console.log(tagline.indexOf("digital"));//resultado 15

//length
//Returns the length of the string
const browserType2 = "mozilla";
console.log (browserType2.length);

//concat
//concatenates the string arguments to the string and returns a new string.
const str1 = "Hello";
const str2 = "world";
console.log(str1.concat(' ',str2)); 
console.log(str2.concat(' ', str1));

//replaceAll
//remplaza un strin con otro
const paragraph = "soy yo el chino";
console.log(paragraph.replaceAll("chino", "carlos"));

//(+)operator

//charAt(), Math.floor(Math.random())

// String.split
let palabras = "todo es muy bonito";
let cosas = palabras.split(" ");
console.log(cosas);

// (6) Arrays
//an array is a list, it can hold many things

//ej:
let fruits = ["apple","banana","mango"];
console.log(fruits[0]);//apple
console.log(fruits[2]);//mango
console.log(fruits[1]);//banana

//BASIC METHODS

//adding: beginnin and end
let arr3 = ["b","c"];
arr3.unshift("a");//unshift (al comienzo)
arr3.push("d");//push (al final)
console.log(arr3);

//removing: beginning and end
let removeElement = arr3.pop();//final
arr3.shift();//comienzo
console.log(arr3);

//get index of valeu
console.log("index of char 'c' is: ", arr3.indexOf("c"));// respyesta es 1

//ejercicios

let saludando =["world","hello","abc"];
console.log(saludando);

let removesaludos = saludando.shift();
saludando.pop();
saludando.push("world,  ");
console.log(saludando);
