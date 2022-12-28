"use strict";

/* const func1 = function(a,b){
    return a+b
    }
   
    func2(a,b){
        return a+b
    }

    const func3 = (a,b) => a + b;




/*  Створи функцію, яка буде виводити кількість переданих їй аргументів.
function func1(a, b, c) {
    console.log(arguments);
  }
  
  func1(1, 5, 8);
*/
function getNumberById(id) {
  return parseInt(document.getElementById(id).value.trim());
}

function setOutput(id, text) {
  document.getElementById(id).innerHTML = text;
}

function easy_3() {
  var num1 = getNumberById('number1');
  var num2 = getNumberById('number2');

  if (num1 > num2) {
    setOutput('result', '1');
  } else if (num2 > num1) {
    setOutput('result', '-1');
  } else {
    setOutput('result', '0');
  }
}

function easy_4() {
  var num = getNumberById('factorial_4');

  function factorial(a) {
    return a != 1 ? a * factorial(a - 1) : 1;
  }

  var rez = factorial(num);
  setOutput('result4', "".concat(rez));
}

function func(a, b, c) {
  return a * 100 + b * 10 + c;
}

function easy_5() {
  var num1 = getNumberById('task5_num1');
  var num2 = getNumberById('task5_num2');
  var num3 = getNumberById('task5_num3');
  var rez = func(num1, num2, num3);
  setOutput('result5', "".concat(rez));
}

function square(a, b) {
  if (typeof b === "undefined" || isNaN(b)) {
    b = a;
  }

  return a * b;
}

function easy_6() {
  var num1 = getNumberById('task6_num1');
  var num2 = getNumberById('task6_num2');
  setOutput('result6', 'square(num1,num2)}');
}

function normal_1() {
  var num = getNumberById('task7_num');

  function getPerfect(num) {
    var result = 0;

    for (var i = 1; i <= num / 2; i++) {
      if (num % i === 0) result += i;
    }

    if (num === result) {
      setOutput('result7', "".concat(num, " \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435 \u0447\u0438\u0441\u043B\u043E"));
    } else {
      setOutput('result7', "".concat(num, " \u043D\u0435\u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435 \u0447\u0438\u0441\u043B\u043E"));
    }
  }

  getPerfect(num);
}

function getPerfect(a, b) {
  var result = [];

  for (var i = a; i < b; i++) {
    sum = 0;

    for (var n = 1; n <= i / 2; n++) {
      if (i % n === 0) sum += n;
    }

    if (i === sum) result.push(i);
  }

  return result;
}

function normal_2() {
  var num1 = getNumberById('task8_num1');
  var num2 = getNumberById('task8_num2');
  setOutput('result8', "".concat(getPerfect(num1, num2), " \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435 \u0447\u0438\u0441\u043B\u043E"));
}