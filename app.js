var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var resultElement = document.getElementById('result');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener('click', function () {
    var num1 = parseFloat(num1Element.value);
    var num2 = parseFloat(num2Element.value);
    var result = add(num1, num2);
    resultElement.textContent = result.toString();
});
