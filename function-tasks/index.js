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
/*function getSum(a,b) {
  const divisionReminderA = a % 2;
  const divisionReminderB = b % 2;
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
      const circle = document.createElement('div');
      circle.className = "circle";
      console.log(circle);
      document.body.appendChild(circle)
    }
}

createRedCircles(10);*/

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
  for (i = 0; i < arguments.length; i++){
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
  for (i = 0; i < arguments.length; i++) {
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
  for (i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
complexDigit(1, 9, 4, 8, 3);*/

//Задача. Есть строка '12346' или '123' или '1234567890', через цикл сложить все цифры этого числа.
/*function getSum() {
  let str = '12346';
  for (let i = 0; i < str.length; i++) {
    sum += str[i];
    console.log(sum);
  }
}*/

//создать обьект чайник. У него должны быть свойства: модель/производитель, дата производства, срок годности, срок гарантии, цвет, высота, вместимость (сами решаете это число/строка или обьект) и СОСТОЯНИЕ (включен или выключен - isOn) , сколько раз уже включали чайник и  3 метода - включить чайник, выключить чайник, вывести данные о чайнике и очистить данные (очистка значения, сколько раз чайник был включен)
/*const kettle = {
  manufacturer: "Bosch",
  model: "TWK3A013",
  dateOfManufacture: 2021,
  guaranteePeriod: 2,
  color: "black",
  height: 23,
  capacity: 1.7,
  isOn: true,
  amountOfUsageTimes: 0,

  turnOn() {
    console.log(isOn);
    console.log(this.amountOfUsageTimes);


    if (this.isOn) {
      return;
    }

    this.isOn = true;
    this.amountOfUsageTimes++;
    console.log(this.amountOfUsageTimes);
  },

  turnOff() {
    this.isOn = false;
    console.log(this.isOn);
  }

  clean() {
    this.amountOfUsageTimes = 0;
  }

  getamountOfUsageTimes() {
    console.log(this.isOn);

    return this.amountOfUsageTimes;
  }
};
kettle.turnOn();
kettle.turnOff();
kettle.clean();
kettle.amountOfUsageTimes();*/


//Реализуйте класс Employee (Работник), который будет иметь свойства: firstname (имя),  lastname (фамилия), rate (ставка за день работы), workDays (количество отработанных дней). Также класс должен иметь метод getCurrentSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
const employee = {
  firstname: "Dasha",
  lastname: "Eide",
  rate: 5,
  workDays: 24,
  getCurrentSalary: function() {
  console.log(this.rate * this.workDays);
  }
  }
console.log(employee.firstname);
console.log(employee.lastname);
console.log(employee.rate);
console.log(employee.workDays);
console.log(employee.getCurrentSalary());

const worker = new employee('Nastya', 'Petrova', 6, 25);

//написать цикл for с перебором массива, на каждую этерацию выводить номер итерации (от 0 до 10 и от 10 до 0)
/*const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    console.log(i);
  }

  /*const num = [5, 6, 7, 8, 9, 1, 2, 3, 4 , 5];
  for (let i = num.length - 1; i >= 0; --i) { 
    console.log(num[i]);
    console.log(i);
  }*/