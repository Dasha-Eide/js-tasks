//Напишите функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
/*function showNumber(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
}
}*/

//Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.
/*function calcAreaRectangle(a, b) {
  return a * b;


function calcAreaSquare(a) {
  return a * a;
}*/

//Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
const a = a % 2;
function getSum(a,b) {
  if (!(a) && !(b % 2)) {
    return a * b;
  } else if ((a) && (b % 2)) {
    return a + b;
} else if (!(a) || (b % 2)) {
  return b;
} else if (!(b % 2) || (a)) {
  return a;
}
}



//Написать функцию, которая принимает 1 аргумент (возраст пользователя) и возвращает boolean значение  - можно ему на сайт или нет.( если 18 и больше лет)
/*function getIsUserAllowed(age) {
  return age >= 18;
}*/

//Написать функцию, которая принимает 3 аргумента, если 1 аргумент true. - то складывать 2 и 3 аргумент , если 1-ый аргумент false  - вычитать 2 и 3 аргументы
/*function getSumArguments(a, b, c) {
  if (a) {
    return b + c;
  }
}*/

//Написать функцию, которая принимает 1 аргумент (кол-во итераций цикла)  и выводит на страницу столько красных кругов на страницу
/*function createRedCircles(amount) {
  console.log('amount', amount)
    for (let i = 0; i < amount; i++) {
      console.log('create circle №', i + 1);
    }
}

createRedCircles(5);*/

//Задачи на аргументы 
//Напишите функцию, которая принимает произвольное количество аргументов в виде строк и выводит их через пробел с помощью document.write() в тело html-документа. Например, функция  showWords("I've", "been", "learning", "JavaScript", "for", "a", "month") должна вывести фразу "I've been learning JavaScript for a month".
/*function showWords() {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
  console.log(arguments[4]);
  console.log(arguments[5]);
  console.log(arguments[6]);
}
showWords("I've", "been", "learning", "JavaScript", "for", "a", "month");*/

/*function showWords {
  console.log(arguments);
  for (i = 0; i < arguments.lenght; i++){
    console.log(arguments[i]);
  }
}
showWords("I've", "been", "learning", "JavaScript", "for", "a", "month");*/

//Напишите функцию, которая принимает произвольное количество аргументов в виде однозначных чисел и возвращает 1 многозначное число. Например, функция с именем complexDigit() при вызове  complexDigit(3,6,7) вернет число 367, а complexDigit(1,9, 4, 8,3) вернет число 19483.
/*function complexDigit() {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
complexDigit(3, 6, 7);*/

/*function complexDigit() {
  console.log(arguments);
  for (i = 0; i < arguments.lenght; i++) {
    console.log(arguments[i]);
  }
}
complexDigit(3, 6, 7);*/

/*function complexDigit() {
  console.log(arguments);
  console.log(argumets[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
  console.log(arguments[4]);
}
complexDigit(1, 9, 4, 8, 3);*/

/*function complexDigit() {
  console.log(arguments);
  for (i = 0; i < arguments.lenght; i++) {
    console.log(arguments[i]);
  }
}
complexDigit(1, 9, 4, 8, 3);*/

//Задача. Есть строка '12346' или '123' или '1234567890', через цикл сложить все цифры этого числа.
let str = '12346';
let num = Number(str);

function getSum() {
  for (var i = 0; i < str.length; i++) {
    sum += (str[i]);
    console.log(sum);
  }
}

//создать обьект чайник. У него должны быть свойства: модель/производитель, дата производства, срок годности, срок гарантии, цвет, высота, вместимость (сами решаете это число/строка или обьект) и СОСТОЯНИЕ (включен или выключен - isOn) , сколько раз уже включали чайник и  3 метода - включить чайник, выключить чайник, вывести данные о чайнике и очистить данные (очистка значения, сколько раз чайник был включен)
/*const kettle = {
  manufacturer: "Bosch",
  model: "TWK3A013",
  "date of manufacture": 2021,
  "guarantee period": 2,
  color: "black",
  height: 23,
  capacity: 1.7,
  condition: "isOn",
  "condition kettle": "isOff",
  "how many times turned on": 5
};
function onKettle() {
  console.log(this.condition);
}
kettle.onKettle();

function offKettle() {
  console.log(kettle["condition kettle"]);
}
kettle.offKettle();

function getData() {
  console.log(kettle);
}

delete kettle["how many times turned on "];
console.log(kettle);*/


//Реализуйте класс Employee (Работник), который будет иметь свойства: firstname (имя),  lastname (фамилия), rate (ставка за день работы), workDays (количество отработанных дней). Также класс должен иметь метод getCurrentSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
const Employee = {
  firstname: "Dasha",
  lastname: "Eide",
  rate: 5,
  workDays: 24
}

Employee = {
  getCurrentSalary() {
    console.log(this.rate * this.workDays);
  }
}

const worker = new Employee('Nastya', 'Petrova', 6, 25);

console.log(Employee.firstname);
console.log(Employee.lastname);
console.log(Employee.rate);
console.log(Employee.workDays);
console.log(Employee.getCurrentSalary());




