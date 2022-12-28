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
    return parseInt((document.getElementById(id).value).trim())
}
function setOutput(id,text) {
    document.getElementById(id).innerHTML=text;
}


function easy_3() {
    const num1 = getNumberById('number1');
    const num2 = getNumberById('number2');

    if(num1>num2) {
        setOutput('result', '1');
    }
    else if(num2>num1) {
        setOutput('result', '-1');
    }
    else {
        setOutput('result', '0');
    }
}


function easy_4() {
    const num = getNumberById('factorial_4');
    function factorial(a) {
        return (a != 1) ? a * factorial(a - 1) : 1;
      }
    const rez = factorial(num);
    setOutput('result4', `${rez}`)
}

function func(a,b,c) {
    return (a*100)+(b*10)+c;
    
 }

function easy_5() {
    const num1 = getNumberById('task5_num1');
    const num2 = getNumberById('task5_num2');
    const num3 = getNumberById('task5_num3');

    const rez = func(num1,num2,num3);
    setOutput('result5', `${rez}`)
}

function square(a, b) {  
    if(typeof(b)==="undefined" || isNaN(b)){
        b = a;
      }
     return a*b  
}

function easy_6() {
    const num1 = getNumberById('task6_num1');
    const num2 = getNumberById('task6_num2');

    setOutput('result6', 'square(num1,num2)}');
}

function normal_1() {
    const num = getNumberById('task7_num');


    function getPerfect(num) {
        let result = 0;
          for (let i = 1; i <= num/2; i++) {
            if (num % i === 0) result += i;
          }
          if (num === result) {
            setOutput('result7', `${num} досконале число`)
        } else{
            setOutput('result7', `${num} недосконале число`)
        }   
        }
        getPerfect(num);
      }
    


      function getPerfect(a, b) {
        let result = [];
        for (let i = a; i < b; i++) {
          sum = 0;
          for (let n = 1; n <= i/2; n++) {
            if (i % n === 0) sum += n;
          }
          if (i === sum) result.push(i);
        }
        return result;
      }

    function normal_2() {
    const num1 = getNumberById('task8_num1');
    const num2 = getNumberById('task8_num2');
       
      setOutput('result8', `${getPerfect(num1, num2)} досконале число`)
    
}


