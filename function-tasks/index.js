//Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
function showNumber(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else if (num1 === num2) {
    return 0;
  }
}

//Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.
function calcAreaRectangle(a, b) {
  return a * b;
}

function calcAreaSquare(a) {
  return a * a;
}

//Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
/*const a;
const b;
function getSum(a,b) {
  if (!(a % 2) && !(b % 2)) {
    return a * b;
  } else if ((a % 2) && (b % 2)) {
    return a + b;
} else if (!(a % 2) || (b % 2)) {
  return b;
} else if (!(b % 2) || (a % 2)) {
  return a;
}
}*/



//Написать функцию, которая принимает 1 аргумент (возраст пользователя) и возвращает boolean значение  - можно ему на сайт или нет.( если 18 и больше лет)
function getIsUserAllowed(age) {
  return age >= 18;
}

//Написать функцию, которая принимает 3 аргумента, если 1 аргумент true. - то складывать 2 и 3 аргумент , если 1-ый аргумент false  - вычитать 2 и 3 аргументы
function getSumArguments(a, b, c) {
  if (a) {
    return b + c;
  } else if (!a) {
    return b - c;
  }
}

//Написать функцию, которая принимает 1 аргумент (кол-во итераций цикла)  и выводит на страницу столько красных кругов на страницу
function createRedCircles(amount) {
  console.log('amount', amount)
    for (let i = 0; i < amount; i++) {
      console.log('create circle №', i + 1);
    }
}

createRedCircles(5);

//Задачи на аргументы 
//Напишите функцию, которая принимает произвольное количество аргументов в виде строк и выводит их через пробел с помощью document.write() в тело html-документа. Например, функция  showWords("I've", "been", "learning", "JavaScript", "for", "a", "month") должна вывести фразу "I've been learning JavaScript for a month".
/*function showWords(a) {
  console.log(arguments);
  console.log(a);
}
showWords("I've been learning JavaScript for a month");
document.write("I've been learning JavaScript for a month");*/

//Напишите функцию, которая принимает произвольное количество аргументов в виде однозначных чисел и возвращает 1 многозначное число. Например, функция с именем complexDigit() при вызове  complexDigit(3,6,7) вернет число 367, а complexDigit(1,9, 4, 8,3) вернет число 19483.
/*function complexDigit(a) {
  console.log(arguments);
  console.log(a);
  return 367;
}
complexDigit(3, 6, 7);*/

/* function complexDigit(a) {
  console.log(arguments);
  console.log(a);
  return 19483;
}
complexDigit(1, 9, 4, 8, 3);*/