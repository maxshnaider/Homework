
function age() {
    let userAge = +prompt('Скільки тобі років');
    if ((isNaN(userAge) || userAge ==null || userAge == '')){
        alert("Спробуй ще раз")
    } else if (userAge>0 && userAge<=11){
        alert(` Ти ще дитина`)
    }
    else if (userAge>=12 && userAge<=17){
    alert(` Ти підліток`)
    }
    else if (userAge>=18 && userAge<=59){
        alert(` Ти дорослий`)
    }
    else if (userAge>=60 && userAge<=130){
        alert(` Ти пенсіонер`)
    }
    else {
        alert(` Щось не те ввів`)
    }
}


function character() {
    let num = +prompt('Введи цифру від 0 до 9')
    let rez = '';
    switch(num){
        case '0':
            rez = ')';
            break;
        case '1':
            rez = '!';
            break;
        case '2':
            rez = '@';
            break;
        case '3':
            rez = '#';
            break;
        case '4':
            rez = '$';
            break;
        case '5':
            rez = '%';
            break;
        case '6':
            rez = '^';
            break;
        case '7':
            rez = '&';
            break;
        case '8':
            rez = '*';
            break;
        case '(':
            rez = '!';
            break;
        default:
            rez = 'Шось не то';
            break;
    }
    alert (`${rez}`);
}

function sum() {
    let a = +prompt('Перше число?');
    let b = +prompt('Друге число?');
    let sum = 0;

    while(a <= b){       
        sum+=a;  
        a++;
     }
    alert(sum)
}


function biggest() {
    let a = +prompt('Перше число?');
    let b = +prompt('Друге число?');
    let high=0;
    while (a!=b)
    {
	if (a>b)
	{
		a = a -b;
	} else {
		b = b - a;
	}
    }
    high = a;
    alert(`${high}`);
}

function task_5() {
    let num = +prompt('Введи число');
    let i = 0;
    
    while (i++ <= num)
    {
        if (num % i == 0)
        {
            alert(`${i}`);
        }
    }
}

function task_2N() {
    let num = +prompt('Яка сума покупки?');
    let sum = 0;

    if(num>=200 && num<300){
        sum = num-(num*0.03);
        alert(`До оплати ${sum}`);
    }

    else if (num>=300 && num<500) {
        sum = num-(num*0.05);
        alert(`До оплати ${sum}`);
    }

    else if (num>=500) {
        sum = num-(num*0.07);
        alert(`До оплати ${sum}`);
    }

    else {
        alert(`До оплати ${num}`)
    }
}


function task_3N() {
   
}


function task4_N() {
    const days = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П`ятниця', 'Субота', 'Неділя'];
    let curr = 0;
    
    while (confirm(`${days[curr]}. Хочеш побачити наступний день?`)) {
      curr = (curr + 1)% 7;
    }
}

function task_1H() {
    let low = 0;
    let high = 100;
    let num = +prompt('Загадай число')

    while(num) {
        
    }

}