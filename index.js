//let x =5;
//console.log(x);
//let price =100;
//console.log(price);
//let gpa =2.1;
//console.log(gpa);
//let firstName ="Kabir";
//console.log(firstName);
//let favoriteFood="Pizza"
//console.log(favoriteFood);
//let online = true;
//console.log(online);
//let forSale = false;
//console.log(forSale);
// Using placeholder $()
//console.log('you are buying $' + price + ' worth of items');
//console.log(`you are ${25} years of age`);
//console.log(`I am ${35} years of age`);
//console.log(`The price is $${25}`);// including $ in the string
//console.log(`mine gpa is:${2.1}`);
//console.log(`My name is ${firstName}`);
//console.log(`My favorite food is ${favoriteFood}`);
//console.log(`I am online:${online}`);
//console.log(`Is it foreSale:${forSale}`);
// use of typeof operator to check the data type of a variable
//console.log(typeof x);  
//console.log(typeof price);
//console.log(typeof gpa);
//console.log(typeof firstName);
//console.log(typeof favoriteFood);
//console.log(typeof online);
//console.log(typeof forSale);

//let fullName ="Kabir Khan";
//let age = 35;
//Enrolled = true;

//document.getElementById("p1").textContent=`My name is ${fullName}`;
//document.getElementById("p2").textContent=`I am ${age} years of age`;
//document.getElementById("p3").textContent=`I am ${Enrolled}`;

// Arithmetic Operators

//let students = 30;
//students = students + 1; //addition 
//students = students-1; // substaction
//students = students * 2;// multiplication
//students = students/3;// division
//students = students ** 2;// exponentiation
//students = students %4;// modulus operator

//Now using augmented assignment operators
//students += 1; //addition
//students -= 1; // subtraction
//students *= 2;// multiplication
//students /= 3;// division 
//students **= 2;// exponentiation
//students %= 4;// modulus operator
//console.log(students);

/* 
    operator precendence 
    1. Parentheses
    2. Exponentiation
    3. Multiplication and Division and Modulus
    4. Addition and Subtraction


*/

//let results = 12 % 5 + 8 / 2;
//console.log(results);
/** How to accept user inputs
 * 1. Easy way= window prompt
 * 2. Professional way= HTML textbox
*/
//Window prompt
//let username;
//username = window.prompt("Whats your username?");
//console.log(username);
// HTML Text Box
let username;
document.getElementById("mySubmit").onclick= function(){
    username = document.getElementById("username").value;
    console.log(username);
}
