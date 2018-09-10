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

/*-add event listeners to the number buttons-*/

button1.addEventListener("click", function(){
   displayBox.innerHTML += 1;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
button2.addEventListener("click", function(){
   displayBox.innerHTML += 2;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
button3.addEventListener("click", function(){
   displayBox.innerHTML += 3;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
button4.addEventListener("click", function(){
   displayBox.innerHTML += 4;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
button5.addEventListener("click", function(){
   displayBox.innerHTML += 5;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
button6.addEventListener("click", function(){
   displayBox.innerHTML += 6;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
button7.addEventListener("click", function(){
   displayBox.innerHTML += 7;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
button8.addEventListener("click", function(){
   displayBox.innerHTML += 8;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
button9.addEventListener("click", function(){
   displayBox.innerHTML += 9;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
button0.addEventListener("click", function(){
   displayBox.innerHTML += 0;
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
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
   displayBox.style.fontSize = "3em";
})
buttonLP.addEventListener("click", function(){
   displayBox.innerHTML += "(";
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
buttonRP.addEventListener("click", function(){
   displayBox.innerHTML += ")";
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
buttonDiv.addEventListener("click", function(){
   displayBox.innerHTML += "/";
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
buttonMult.addEventListener("click", function(){
   displayBox.innerHTML += "*";
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
buttonAdd.addEventListener("click", function(){
   displayBox.innerHTML += "+";
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
buttonSub.addEventListener("click", function(){
   displayBox.innerHTML += "-";
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
buttonEq.addEventListener("click", function(){
   displayBox.innerHTML = eval(String(displayBox.innerHTML));
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
buttonDot.addEventListener("click", function(){
   displayBox.innerHTML += ".";
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})
buttonPlusMinus.addEventListener("click", function(){
   displayBox.innerHTML = displayBox.innerHTML *(-1);
   if(displayBox.innerHTML.length >12){
      displayBox.style.fontSize = "1.75em";
   }
   if(displayBox.innerHTML.length >20){
      displayBox.style.wordWrap = "break-word";
   }
})