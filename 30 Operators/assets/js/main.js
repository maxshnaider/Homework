function plus() {
    let sum = 0.1 + 0.2;
    alert( sum.toFixed(1) );
}

function plus2() {
    let first = "1";
    let second = 2;
    let sum2= Number(first) + second;
    alert(`${sum2}`)

}


function howMany() {
    const amountGb = prompt('На скільки гб в тебе флешка?');
    const file = 820;
    if ((isNaN(amountGb) || amountGb ==null || amountGb == '')){
        alert("Спробуй ще раз")
        }else {
            const amountMb = amountGb*1024;
            let howManyFile = amountMb/file;
            if (amountMb<file) {
                alert("Тобі не хватить місця")
            } else {
        alert(`Ти зможеш закачати ${Math.floor(howManyFile)}`)
            }
        }    
}


function chocolate() {
    let money = prompt('Скільки в тебе гривень?');
    let price = prompt('Яка ціна шоколадки?');

    if (isNaN(money) || isNaN(price) || money ==null || money == '' || price ==null || price == ''){
        alert("Спробуй ще раз")
        }
        else {
            let amount = money/price;
            let rest = money-(Math.floor(amount)*price);
        alert(`Ти зможеш купити ${Math.floor(amount)} шт., твоя решта ${rest} грн.`)
        } 

}

function reverse() {
    let num = prompt('Напиши число')
    if ((isNaN(num) || num ==null || num == '')){
        alert("Спробуй ще раз")
    } else {
        let a = Math.trunc(num/100);
        let b = Math.trunc((num%100)/10);
        let c = num%10;
        alert(`${c}${b}${a}`)
    }
}


function deposit() {
    let sum = prompt('Скільки грн ти хочеш покласти?');
    if ((isNaN(sum) || sum ==null || sum == '')){
        alert("Спробуй ще раз")
    } else {
        let profitMonth = (sum*0.05)/12;
        let month = 2;
        alert(` ${month} місяці вам нараховано ${(profitMonth*month).toFixed(2)} грн.`)
    }
}