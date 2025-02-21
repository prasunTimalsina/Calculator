"use strict";

///elements
const previousActiveEle = document.querySelector(".previous-active");
const currentActiveEle = document.querySelector(".current-active");
const displayBtnElements = Array.from(document.querySelectorAll(".d-btn"));
const equalBtnEle = document.querySelector(".equals-to");
const clearBtnEle = document.querySelector(".clear");
const backspaceBtnEle = document.querySelector(".backspace");

//global variable
let expString = "";

/////Events
displayBtnElements.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    addToDisplayString(e.target.textContent);
  });
});

/* Evaluating Result */
equalBtnEle.addEventListener("click", () => {
  expString = makeExpStringCompatible();
  const result = eval(expString);
  console.log(result);
  previousActiveEle.textContent = expString;
  currentActiveEle.textContent = result;
  expString = String(result);
});

//Clearing Event
clearBtnEle.addEventListener("click", () => {
  clear();
});

backspaceBtnEle.addEventListener("click", () => {
  expString = expString.slice(0, -1);
  currentActiveEle.textContent = expString;
});

///functions

const addToDisplayString = (char) => {
  expString = expString + char;
  currentActiveEle.textContent = expString;
};

const clear = () => {
  currentActiveEle.textContent = "";
  previousActiveEle.textContent = "";
  expString = "";
};

const makeExpStringCompatible = () => {
  return expString
    .replaceAll("÷", "/")
    .replaceAll("x", "*")
    .replaceAll("%", "/100");
};

const evaluatePercentage = () => {
  if (eval(expString)) {
  }
};
