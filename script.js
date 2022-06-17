class calculator {
  constructor(currentOperandTextElement, previousOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  pressedNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }
  compute() {
    let computation;
    const current = parseFloat(this.currentOperand);
    const prev = parseFloat(this.previousOperand);
    if (isNaN(current) || isNaN(prev)) return;
    switch (this.operation) {
      case '+':
        computation = current + prev;
        break;
      case '-':
        computation = current - prev;
        break;
      case '/':
        computation = current / prev;
        break;
      case '*':
        computation = current * prev;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }
  updateDisplay(eq) {
    if (eq == 1) {
      this.currentOperandTextElement.value = '';
      this.currentOperandTextElement.placeholder = this.currentOperand;
      this.currentOperand = '';
    } else {
      this.currentOperandTextElement.placeholder = '0';
      this.currentOperandTextElement.value = this.currentOperand;
    }
    if (this.operation != null) {
      this.previousOperandTextElement.value = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.value = this.previousOperand;
    }
  }
}
var input = document.getElementById('input');
var del = document.getElementById('del');
var result = document.getElementById('result');
var operation = document.querySelectorAll('[operation]');
var cl = document.getElementById('clear');
var eq = document.getElementById('equal');
var no = document.querySelectorAll('[number]');
const calc = new calculator(input, result);
no.forEach((button) => {
  button.addEventListener('click', () => {
    calc.pressedNumber(button.innerText);
    calc.updateDisplay(0);
  });
});
operation.forEach((button) => {
  button.addEventListener('click', () => {
    calc.chooseOperation(button.innerText);
    calc.updateDisplay(0);
  });
});
eq.addEventListener('click', () => {
  calc.compute();
  calc.updateDisplay(1);
});
cl.addEventListener('click', () => {
  calc.clear();
  calc.updateDisplay(0);
});
del.addEventListener('click', () => {
  calc.delete();
  calc.updateDisplay(0);
});
