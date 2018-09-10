/*We still need to figure out how to handle the display box overflow of very large numbers.  try 5/99 to see what i mean.  Right now it can hold 13 digits and still look right.  Maybe shrink the text size to fit larger digits?  Increase the dislplay area size?*/

let displayBox = document.getElementById("displayBox");

/*------declare the number buttons------*/

let button1 = document.getElementById("calcBut1");
let button2 = document.getElementById("calcBut2");
let button3 = document.getElementById("calcBut3");
let button4 = document.getElementById("calcBut4");
let button5 = document.getElementById("calcBut5");
let button6 = document.getElementById("calcBut6");
let button7 = document.getElementById("calcBut7");
let button8 = document.getElementById("calcBut8");
let button9 = document.getElementById("calcBut9");
let button0 = document.getElementById("calcBut0");
let button00 = document.getElementById("calcBut00");

/*-add event listeners to the number buttons-*/

button1.addEventListener("click", function(){
   displayBox.innerHTML += 1;
})
button2.addEventListener("click", function(){
   displayBox.innerHTML += 2;
})
button3.addEventListener("click", function(){
   displayBox.innerHTML += 3;
})
button4.addEventListener("click", function(){
   displayBox.innerHTML += 4;
})
button5.addEventListener("click", function(){
   displayBox.innerHTML += 5;
})
button6.addEventListener("click", function(){
   displayBox.innerHTML += 6;
})
button7.addEventListener("click", function(){
   displayBox.innerHTML += 7;
})
button8.addEventListener("click", function(){
   displayBox.innerHTML += 8;
})
button9.addEventListener("click", function(){
   displayBox.innerHTML += 9;
})
button0.addEventListener("click", function(){
   displayBox.innerHTML += 0;
})

/*------declare the non-number buttons------*/

let buttonAC = document.getElementById("calcButAC");
let buttonLP = document.getElementById("calcButLP");
let buttonRP = document.getElementById("calcButRP");
let buttonDiv = document.getElementById("calcButDivide");
let buttonMult = document.getElementById("calcButMultiply");
let buttonAdd = document.getElementById("calcButAdd");
let buttonSub = document.getElementById("calcButSubtract");
let buttonEq = document.getElementById("calcButEquals");
let buttonDot = document.getElementById("calcButDot");
let buttonPlusMinus = document.getElementById("calcButPlus_Minus");

/*add event listeners to non-number buttons*/

buttonAC.addEventListener("click", function(){
   displayBox.innerHTML = "";
})
buttonLP.addEventListener("click", function(){
   displayBox.innerHTML += "(";
})
buttonRP.addEventListener("click", function(){
   displayBox.innerHTML += ")";
})
buttonDiv.addEventListener("click", function(){
   displayBox.innerHTML += "/";
})
buttonMult.addEventListener("click", function(){
   displayBox.innerHTML += "*";
})
buttonAdd.addEventListener("click", function(){
   displayBox.innerHTML += "+";
})
buttonSub.addEventListener("click", function(){
   displayBox.innerHTML += "-";
})
buttonEq.addEventListener("click", function(){
   displayBox.innerHTML = eval(String(displayBox.innerHTML));
})
buttonDot.addEventListener("click", function(){
   displayBox.innerHTML += ".";
})
buttonPlusMinus.addEventListener("click", function(){
   displayBox.innerHTML = displayBox.innerHTML *(-1);
})