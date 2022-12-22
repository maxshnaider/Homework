"use strict";

function sayHello() {
  var userName = prompt('Мені потрібно твоє ім`я');

  if (userName !== null && userName !== '') {
    alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(userName));
  } else {
    alert("\u0414\u0430\u0432\u0430\u0439 \u0441\u043F\u0440\u043E\u0431\u0443\u0454\u043C\u043E \u0449\u0435 \u0440\u0430\u0437");
  }
}

function howOld() {
  var currYear = 2022;
  var born = prompt('Коли ти народився?');

  if (isNaN(born) || born == null || born == '') {
    alert("Спробуй ще раз");
  } else {
    var ageYou = currYear - born;
    alert("\u0422\u043E\u0431\u0456 \u0437\u0430\u0440\u0430\u0437 ".concat(ageYou, " \u0440\u043E\u043A\u0456\u0432"));
  }
}

function perimetr() {
  var lengthSq = prompt('Скажи довжину свого квадрату');

  if (isNaN(lengthSq) || lengthSq == null || lengthSq == '') {
    alert("Спробуй ще раз");
  } else {
    var perSq = lengthSq * 4;
    alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 ".concat(perSq));
  }
}

function area() {
  var radCircle = prompt('Скажи радіус кола');

  if (isNaN(radCircle) || radCircle == null || radCircle == '') {
    alert("Спробуй ще раз");
  } else {
    var areaCircle = Math.pow(radCircle, 2) * Math.PI;
    alert("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 ".concat(areaCircle));
  }
}

function speed() {
  var distance = prompt('Яка відстань між містами?');
  var time = prompt('За скільчи часу плануєш дістатись?');

  if (isNaN(distance) || isNaN(time)) {
    alert("Давай ти напишеш цифру");
  } else {
    var speedUser = distance * time;
    alert("\u0422\u0432\u043E\u044F \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u0431\u0443\u0442\u0438 ".concat(speedUser));
  }
}

function converter() {
  var dollars = prompt('Скільки в тебе доларів?');
  var exchEurDoll = 0.94;

  if (isNaN(dollars) || dollars == null || dollars == '') {
    alert("Спробуй ще раз");
  } else {
    var sum = dollars * exchEurDoll;
    alert("\u0422\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0448 ".concat(sum.toFixed(1), " \u0454\u0432\u0440\u043E!"));
  }
}