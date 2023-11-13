const screenDisplay = document.querySelector('.screen_display');
const buttons = document.querySelectorAll('[id]')

let isBtnClicked =false;
let numberEntered = '';
let firstValue = 0;

//buttons do work
buttons.forEach(btn => {
btn.addEventListener('click', function() {
inputNumber(this.id)
});
});
function inputNumber(number) {
if (firstValue === 0) {
isBtnClicked = true;
screenDisplay.innerHTML = screenDisplay.value+=number;
}
let secondValue = ''
if (secondValue !== 0) {
secondValue = number;
screenDisplay.innerHTML = secondValue += number
}
}
