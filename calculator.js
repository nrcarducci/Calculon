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

document.button0.addEventListener("click", function(input){
    input.innerHTML.push(0);
})

document.button1.addEventListener("click", function(input){
    input.innerHTML.push(1);
})

document.button2.addEventListener("click", function(input){
    input.innerHTML.push(2);
})

document.button3.addEventListener("click", function(input){
    input.innerHTML.push(3);
})

document.button4.addEventListener("click", function(input){
    input.innerHTML.push(4);
})

document.button5.addEventListener("click", function(input){
    input.innerHTML.push(5);
})

document.button6.addEventListener("click", function(input){
    input.innerHTML.push(6);
})

document.button7.addEventListener("click", function(input){
    input.innerHTML.push(7);
})

document.button8.addEventListener("click", function(input){
    input.innerHTML.push(8);
})

document.button9.addEventListener("click", function(input){
    input.innerHTML.push(9);
})