function sayHello() {
    const userName = prompt('Мені потрібно твоє ім`я');
    if (userName !==null && userName !== '') {
        alert(`Привіт, ${userName}`);
    }
    else {
        alert(`Давай спробуємо ще раз`)
    }
}

function howOld() {
    const currYear = 2022;
    const born = prompt('Коли ти народився?');
    if ((isNaN(born) || born ==null || born == '')){
        alert("Спробуй ще раз")
        }
    else {
            let ageYou = currYear-born;
        alert(`Тобі зараз ${ageYou} років`)
        }
}

function perimetr() {
    const lengthSq = prompt('Скажи довжину свого квадрату');
    if ((isNaN(lengthSq) || lengthSq ==null || lengthSq == '')){
        alert("Спробуй ще раз")
        }else {
            let perSq = lengthSq*4;
        alert(`Периметр квадрату ${perSq}`)
        }    
}

function area() {
    const radCircle = prompt('Скажи радіус кола');
    if ((isNaN(radCircle) || radCircle ==null || radCircle == '')){
        alert("Спробуй ще раз")
        }else {
            let areaCircle = Math.pow(radCircle, 2) * Math.PI;
        alert(`Площа окружності ${areaCircle}`)
        }  
}

function speed() {
    const distance = prompt('Яка відстань між містами?');
    const time = prompt('За скільчи часу плануєш дістатись?');
    if (isNaN(distance) || isNaN(time)){
        alert("Давай ти напишеш цифру")
        }
        else {
            let speedUser = distance*time;
        alert(`Твоя швидкість повинна бути ${speedUser}`)
        }  
}

function converter() {
    const dollars = prompt('Скільки в тебе доларів?');
    let exchEurDoll = 0.94;
    if ((isNaN(dollars) || dollars ==null || dollars == '')){
        alert("Спробуй ще раз")
    }
    else {
        let sum = dollars*exchEurDoll;
        alert(`Ти отримаєш ${sum.toFixed(1)} євро!`)
    }
    }
