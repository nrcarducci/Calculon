let input = document.getElementById("displayBox");

let button0 = document.getElementById("calcBut0");
let button1 = document.getElementById("calcBut1");
let button2 = document.getElementById("calcBut2");
let button3 = document.getElementById("calcBut3");
let button4 = document.getElementById("calcBut4");
let button5 = document.getElementById("calcBut5");
let button6 = document.getElementById("calcBut6");
let button7 = document.getElementById("calcBut7");
let button8 = document.getElementById("calcBut8");
let button9 = document.getElementById("calcBut9");

button0.addEventListener("click", makeZero);
button1.addEventListener("click", makeOne);
button2.addEventListener("click", makeTwo);
button3.addEventListener("click", makeThree);
button4.addEventListener("click", makeFour);
button5.addEventListener("click", makeFive);
button6.addEventListener("click", makeSix);
button7.addEventListener("click", makeSeven);
button8.addEventListener("click", makeEight);
button9.addEventListener("click", makeNine);

function makeZero(){

    return input.innerHTML=0; 
}

function makeOne(){

    return input.innerHTML=1; 
}

function makeTwo(){
   return input.innerHTML=2;
}

function makeThree(){
    return input.innerHTML=3;
}

function makeFour(){
    return input.innerHTML=4;
}

function makeFive(){
    return input.innerHTML=5;
}
function makeSix(){
    return input.innerHTML=6;
}

function makeSeven(){
    return input.innerHTML=7;
}

function makeEight(){
    return input.innerHTML=8;
}

function makeNine(){
    return input.innerHTML=9;
}