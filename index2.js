//If statement = if a condition is true, execute the code or do something else

//let age= 13;

//if(age>=18){
  //  console.log("You are allowed to enter the site");
//}else{
  //  console.log ("You need to be 18 to enter the site ");
//}
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
mySubmit.onclick = function(){
    if (myCheckbox.checked){
        subResult.textContent = `You are Subsribed`;
    }
    else{
    subResult.textContent = `You are not Subscribed`;
    }
    if (visaBtn.checked){
        paymentResult.textContent = `You are using Visa`;
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = `You are using MasterCard`;
    }
    else{
        paymentResult.textContent = `You are using PayPal`;
    }

}
