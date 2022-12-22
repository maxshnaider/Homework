"use strict";

function plus() {
  var sum = 0.1 + 0.2;
  alert(sum.toFixed(2));
}

function plus2() {
  var first = "1";
  var second = 2;
  var sum2 = Number(first) + second;
  alert("".concat(sum2));
}

function howMany() {
  var amountGb = prompt('На скільки гб в тебе флешка?');
  var file = 820;

  if (isNaN(amountGb) || amountGb == null || amountGb == '') {
    alert("Спробуй ще раз");
  } else {
    var amountMb = amountGb * 1024;
    var howManyFile = amountMb / file;

    if (amountMb < file) {
      alert("Тобі не хватить місця");
    } else {
      alert("\u0422\u0438 \u0437\u043C\u043E\u0436\u0435\u0448 \u0437\u0430\u043A\u0430\u0447\u0430\u0442\u0438 ".concat(Math.floor(howManyFile)));
    }
  }
}

function chocolate() {
  var money = prompt('Скільки в тебе гривень?');
  var price = prompt('Яка ціна шоколадки?');

  if (isNaN(money) || isNaN(price) || money == null || money == '' || price == null || price == '') {
    alert("Спробуй ще раз");
  } else {
    var amount = money / price;
    var rest = money - Math.floor(amount) * price;
    alert("\u0422\u0438 \u0437\u043C\u043E\u0436\u0435\u0448 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(Math.floor(amount), " \u0448\u0442., \u0442\u0432\u043E\u044F \u0440\u0435\u0448\u0442\u0430 ").concat(rest, " \u0433\u0440\u043D."));
  }
}

function reverse() {
  var num = prompt('Напиши число');

  if (isNaN(num) || num == null || num == '') {
    alert("Спробуй ще раз");
  } else {
    var a = Math.trunc(num / 100);
    var b = Math.trunc(num % 100 / 10);
    var c = num % 10;
    alert("".concat(c).concat(b).concat(a));
  }
}

function deposit() {
  var sum = prompt('Скільки грн ти хочеш покласти?');

  if (isNaN(sum) || sum == null || sum == '') {
    alert("Спробуй ще раз");
  } else {
    var profitMonth = sum * 0.05 / 12;
    var month = 2;
    alert(" ".concat(month, " \u043C\u0456\u0441\u044F\u0446\u0456 \u0432\u0430\u043C \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u043E ").concat((profitMonth * month).toFixed(2), " \u0433\u0440\u043D."));
  }
}