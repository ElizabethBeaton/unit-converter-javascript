/*
1 centimeter = 0.393701 inches
1 liter = 0.264 gallons
1 kilogram = 2.204 pounds
*/

const convertEl = document.getElementById("btn-convert");
const inputEl = document.getElementById("inputEl");
const lengthEl = document.getElementById("results-length");
const volumeEl = document.getElementById("results-volume");
const weightEl = document.getElementById("results-weight");

const lengthConversion = 0.393701;
const volumeConversion = 0.264172;
const weightConversion = 2.20462;

function convert() {
  const input = parseFloat(inputEl.value);
  lengthEl.textContent = `${input} centimeters = ${(
    input * lengthConversion
  ).toFixed(2)} inches`;
  volumeEl.textContent = `${input} liters = ${(
    input * volumeConversion
  ).toFixed(2)} gallons`;
  weightEl.textContent = `${input} kilograms = ${(
    input * weightConversion
  ).toFixed(2)} pounds`;
}

convertEl.addEventListener("click", convert);
