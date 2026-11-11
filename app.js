let redBtn = document.querySelector(".red");
let yellowBtn = document.querySelector(".yellow");
let greenBtn = document.querySelector(".green");
let blueBtn = document.querySelector(".blue");
let orangeBtn = document.querySelector(".orange");
let pinkBtn = document.querySelector(".pink");

const redHandler = function () {
    document.body.style.backgroundColor = "red";
};

const yellowHandler = function () {
    document.body.style.backgroundColor = "yellow";
};

const greenHandler = function () {
    document.body.style.backgroundColor = "green";
};

const blueHandler = function () {
    document.body.style.backgroundColor = "blue";
};

const orangeHandler = function () {
    document.body.style.backgroundColor = "orange";
};

const pinkHandler = function () {
    document.body.style.backgroundColor = "pink";
};

// Event listeners

redBtn.addEventListener("click", redHandler);

yellowBtn.addEventListener("click", yellowHandler);

greenBtn.addEventListener("click", greenHandler);

blueBtn.addEventListener("click", blueHandler);

orangeBtn.addEventListener("click", orangeHandler);

pinkBtn.addEventListener("click", pinkHandler);