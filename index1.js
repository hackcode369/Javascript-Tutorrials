//Math Object - Math Object in JavaScript built-in object that provides various mathematical functions, properties and methods.
// It is used to perform mathematical operations like trigonometric functions.
// It is used to perform mathematical operations like exponential, logarithmic, power, root, etc.
//Math.PI
//console.log(Math.PI);
//let x= 4.2;
//let y =3;
//let z;
//z = Math.round(x);// round the number to the nearest integer
//console.log(z);
//z = Math.ceil(x);//ceil function returns the smallest integer that is greater than or equal to the given number.
//console.log(z);
//z = Math.floor(x);//floor function returns the largest integer that is less than or equal to the given number.
//console.log(z);
//z = Math.trunc(x);
//console.log(z);// trunc function returns the integer part of the number.
//z = Math.pow(x,y); //pow function returns the result of raising the first argument to the power of the second argument.
//console.log(z);
//z = Math.sqrt(x); //sqrt function returns the square root of the number.
//console.log(z);
//z = Math.abs(x); //abs function returns the absolute value of the number.
//console.log(z);
//z = Math.max(x,y); //max function returns the largest of zero or more numbers.
//console.log(z);
//z = Math.min(x,y); //min function returns the smallest of zero or more numbers.
//console.log(z);
//Program to Develop A Random Number Generator
//const min = 50;
//const max = 100;
//let randomNum= Math.floor(Math.random()*(max-min)) + min;   
//console.log(randomNum);
const roll =document.getElementById("roll");
const mylabel =document.getElementById("mylabel");
const min= 1;
const max = 6;
let randomNum;
roll.onclick = function(){
    randomNum = Math.floor(Math.random()*6) + min;
    mylabel.textContent = randomNum;
}
