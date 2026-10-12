const firstName = "Nadezhda";
const lastName = "Yanschina";
const isStudent = true;

console.log(firstName, lastName, isStudent);

const age = 41;
let currentYear = 2026;

console.log(currentYear - age);

const birthYear = 1984;

console.log(
	`My name is ${firstName} ${lastName}, i'm ${age} years old and i'm a student of the course that is ${isStudent}.`,
);

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

console.log(result);

let number = 0;

if (number > 0) {
	console.log("Число положительное");
} else if (number < 0) {
	console.log("Число отрицательное");
} else {
	console.log("Число равно нулю");
}
