//Functions

//Method #1 - Function decleration
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(30, 20);

//Method #2 - Function expressions
const multiNums = function(num1, num2) {
    return num1 * num2;
}
console.log(multiNums(30, 20));

//Method #3 - Arrow Function
const modNums = (num1, num2) => {
    return num1 % num2;
}
console.log(modNums(30, 20));

//Method #4 - Condensed Arrow Function
const divNums = num1 => num1 / 5;
console.log(divNums(30));
