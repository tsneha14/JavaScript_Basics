console.log("Hello JavaScript");
var firstName = 'Sneha';
let years = 25;
const isnotDeveloper = false;
console.log(firstName);
console.log(age);
console.log(isDeveloper);

function varExp(){
    if(true){
        var num1 = 10;
        console.log("Inside if var " + num1);
    }
    console.log("Outside if var " + num1);
}
varExp()
console.log("Outside function var " + num1);

if(true){
    let num2 = 20;
    console.log("Inside if let " + num2);
}
console.log("Outside if let " + num2);

// var - functional scope
// let - blocked scope
// const - cannot change once declared

//Data Types - String, Numbers, Boolean, null, undefined, Symbol.
const surname = 'Sneha T';
const age1 = 25;
const rating = 9.5;
const isDeveloper = true;
const x = null;
let z;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isDeveloper);
console.log(typeof x);
console.log(typeof z);

//String concatenation
const name = 'Sneha';
const age = 25;

//old way
console.log('My name is ' + name + ' and i am ' + age + ' year\'s old.');

//New way
console.log(`My name is ${name} and i am ${age} year's old.`);

//String methods
const str = 'Hello JavaScript';

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0, 7));
console.log(str.includes('Java'));
console.log(str.includes('Cobol'));

// Array
const lang = ['JavaScript', 'Java', 'C++', 'Golang', 'Kotlin', 5, true];
console.log(lang[2]);

lang[3] = 'C';
console.log(lang);

lang.pop(); // removes elements from last
console.log(lang);

lang.push('Pascal'); // adds elements from last
lang.unshift('Swift'); // adds elements at start
console.log(lang);

lang.shift(); // removes elements from start
console.log(lang);

console.log(Array.isArray(lang));
console.log(Array.isArray('JavaScript'));
console.log(lang.includes('Java'));
console.log(lang.includes('Cobol'));

//Objects
const person = {
    firstName: 'Sneha',
    'Last Name': 'T',
    age: 25,
    isDeveloper: true,
    hobbies: ['coding', 'youtubing','teaching'],
    address: {
        hno: 95,
        city: 'Hyd',
        state: 'AP'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person['Last Name']); // not used much
console.log(person.hobbies[1]);
console.log(person.address.city);

console.log(Object.keys(person));
console.log(Object.values(person));