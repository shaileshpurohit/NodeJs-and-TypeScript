"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const resultElement = document.getElementById('result');
const buttonElement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener('click', () => {
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);
    const result = add(num1, num2);
    resultElement.textContent = result.toString();
});
//# sourceMappingURL=app.js.map