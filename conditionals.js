//Conditionals

//if statement
const x = '10';
if(x == 10) {
    console.log('x is 10');
}

//if else statement
const y = '20';
if(y === 20){
    console.log('y is 20');
} else {
    console.log('y is string 20');
}

//if-else if-else statement
const z = 69;
if(z > 100) {
    console.log('z is greater then 100');
} else if(z > 80) {
    console.log('z is greater then 80');
} else if(z > 60) {
    console.log('z is greater then 60');
} else if(z > 40) {
    console.log('z is greater then 40');
} else if(z > 20) {
    console.log('z is greater then 20');
} else {
    console.log('z is less then 20');
}

//OR and AND operators
const a = 20;
const b = 30;

if(a === 20 || b === 40){
    console.log('Any one of the statement are true');
}

if(a === 20 && b === 30){
    console.log('Both of the statement are true');
}

//Ternary Operator
const c = 10;
let color1;
if(c > 10){
    color1 = 'red'
} else {
    color1 = 'blue'
} console.log(color1);

//the above code can be written using terenary operator as follows

const color2 = z > 9 ? 'red' : 'blue';
console.log(color2);

//Switch statement
const color = 'purple';
switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break;
    case 'purple':
    case 'brown':
        console.log('color is purple or brown')
        break;
    case 'yellow':
        console.log('color is yellow')
        break;
    default:
        console.log('No color matched')
        break;
}
