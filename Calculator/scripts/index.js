"use strict";

window.onload = init;

function init() {
  const addBtnEl = document.getElementById("addBtn");
  addBtnEl.onclick = onAddBtnClicked;

  const subtractBtnEl = document.getElementById("subtractBtn");
  subtractBtnEl.onclick = onSubtractBtnClicked;

  const multiplyBtnEl = document.getElementById("multiplyBtn");
  multiplyBtnEl.onclick = onMultiplyBtnClicked;

  const divideBtnEl = document.getElementById("divideBtn");
  divideBtnEl.onclick = onDivideBtnClicked;
}

function onAddBtnClicked() {
  const number2FieldEl = document.getElementById("number2Field");
  const number1FieldEl = document.getElementById("number1Field");

  const num1 = +number1Field.value;
  const num2 = +number2Field.value;
  const answer = num1 + num2;

  const answerField = document.getElementById("answerField");
  answerField.value = answer;
}
function onSubtractBtnClicked() {
  const number2FieldEl = document.getElementById("number2Field");
  const number1FieldEl = document.getElementById("number1Field");

  const num1 = +number1Field.value;
  const num2 = +number2Field.value;
  const answer = num1 - num2;

  const answerField = document.getElementById("answerField");
  answerField.value = answer;
}
function onMultiplyBtnClicked() {
  const number2FieldEl = document.getElementById("number2Field");
  const number1FieldEl = document.getElementById("number1Field");

  const num1 = +number1Field.value;
  const num2 = +number2Field.value;
  const answer = num1 * num2;

  const answerField = document.getElementById("answerField");
  answerField.value = answer;
}
function onDivideBtnClicked() {
  const number2FieldEl = document.getElementById("number2Field");
  const number1FieldEl = document.getElementById("number1Field");

  const num1 = +number1Field.value;
  const num2 = +number2Field.value;
  const answer = num1 / num2;

  const answerField = document.getElementById("answerField");
  answerField.value = answer;
}
