var input = document.getElementById('input');
var result = document.getElementById('result');
var add = document.getElementById('add');
var sub = document.getElementById('sub');
var mult = document.getElementById('mult');
var div = document.getElementById('div');
var cl = document.getElementById('clear');
var eq = document.getElementById('equal');
var no = document.querySelectorAll('[number]');
var resultShow = 0;
var pressedNumber = '';
var id = 0;
no.forEach((num) => {
  num.addEventListener('click', () => {
    if (id == 6) {
      clear();
      id = 0;
    }
    pressedNumber += num.value;
    input.value += num.value;
  });
});
cl.addEventListener('click', function cl() {
  input.value = '';
  input.placeholder = '0';
  result.value = '';
  pressedNumber = '';
  resultShow = 0;
});
add.addEventListener('click', function add() {
  id = 1;
  operation();
});
sub.addEventListener('click', function sub() {
  id = 2;
  operation();
});
div.addEventListener('click', function div() {
  id = 3;
  operation();
});
mult.addEventListener('click', function mult() {
  id = 4;
  operation();
});
eq.addEventListener('click', function display() {
  check();
  let show = result.value;
  result.value = show + pressedNumber + '=';
  pressedNumber = '';
  input.value = '';
  input.placeholder = resultShow;
  id = 6;
});
function operation() {
  if (id == 1) {
    input.value = '';
    if (resultShow == 0) {
      resultShow = Number(pressedNumber);
    } else {
      resultShow += Number(pressedNumber);
    }
    result.value = resultShow + '+';
    input.placeholder = resultShow;
    pressedNumber = '';
  } else if (id == 2) {
    input.value = '';
    if (resultShow == 0) {
      resultShow = Number(pressedNumber);
    } else {
      resultShow -= Number(pressedNumber);
    }
    result.value = resultShow + '-';
    input.placeholder = resultShow;
    pressedNumber = '';
  } else if (id == 3) {
    input.value = '';
    if (resultShow == 0) {
      resultShow = Number(pressedNumber);
    } else {
      resultShow /= Number(pressedNumber);
    }
    result.value = resultShow + '/';
    input.placeholder = resultShow;
    pressedNumber = '';
  } else if (id == 4) {
    input.value = '';
    if (resultShow == 0) {
      resultShow = Number(pressedNumber);
    } else {
      resultShow *= Number(pressedNumber);
    }
    result.value = resultShow + '*';
    input.placeholder = resultShow;
    pressedNumber = '';
  }
}
function check() {
  if (id == 1) {
    resultShow += Number(pressedNumber);
  } else if (id == 2) {
    resultShow -= Number(pressedNumber);
  } else if (id == 4) {
    resultShow *= Number(pressedNumber);
  } else if (id == 3) {
    resultShow /= Number(pressedNumber);
  } else {
    resultShow = Number(pressedNumber);
  }
}
function clear() {
  input.value = '';
  result.value = '';
}
