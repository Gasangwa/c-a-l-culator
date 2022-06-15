var input = document.getElementById('input');
var result = document.getElementById('result');
var add = document.getElementById('add');
var sub = document.getElementById('sub');
var mult = document.getElementById('mult');
var div = document.getElementById('div');
var cl = document.getElementById('clear');
var eq = document.getElementById('equal');
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
var n4 = document.getElementById('n4');
var n5 = document.getElementById('n5');
var n6 = document.getElementById('n6');
var n7 = document.getElementById('n7');
var n8 = document.getElementById('n8');
var n9 = document.getElementById('n9');
var n0 = document.getElementById('n0');
var point = document.getElementById('point');
var resultShow = 0;
var pressedNumber = '';
var id = 0;
n0.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n0.value;
  pressedNumber += n0.value;
});
n1.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n1.value;
  pressedNumber += n1.value;
});
n2.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n2.value;
  pressedNumber += n2.value;
});
n3.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n3.value;
  pressedNumber += n3.value;
});
n4.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n4.value;
  pressedNumber += n4.value;
});
n5.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n5.value;
  pressedNumber += n5.value;
});
n6.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n6.value;
  pressedNumber += n6.value;
});
n7.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n7.value;
  pressedNumber += n7.value;
});
n8.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n8.value;
  pressedNumber += n8.value;
});
n9.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += n9.value;
  pressedNumber += n9.value;
});
point.addEventListener('click', function show() {
  if (id == 6) {
    clear();
    id = 0;
  }
  input.value += point.value;
  pressedNumber += point.value;
});
cl.addEventListener('click', function clear() {
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
  opration();
});
eq.addEventListener('click', function display() {
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
  result.value += pressedNumber + '=';
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
  } else {
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
function clear() {
  input.value = '';
  result.value = '';
  resultShow = 0;
}
