//задачи на условное ветвление
//task1 Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.  
let a = 10;
if (a == 10) {
  alert ("True");
} else {
  alert ("False");
}

//task2 В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
let min = 10;
if (min >= 0 && min <= 14) {
  alert ("В первую четверть.");
}

if (min >= 15 && <= 30) {
  alert ("Во вторую четверть.");
}

if (min >= 31 && <= 45) {
  alert ("В третью четверть.");
}

if (min >= 46 && <= 59) {
  alert ("В четвертую четверть.");
}

//task3 Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let a = 0;
if (a == 10) {
  alert ("True");
} else {
  alert ("False");
}

let a = 1;
if (a == 1) {
  alert ("True");
} else {
  alert ("False");
}

let a = 0;
if (!a) {
  alert ("True");
} else {
  alert ("False");
}

let a = -3;
if (a == -3) { 
  alert ("True");
} else {
  alert ("False");
}

//task4 Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let a > 0;
if (a > 0) {
  alert ("True");
} else {
  alert ("False");
}

let a = 1;
if (a == 1) {
  alert ("True");
} else {
  alert ("False");
}

let a = 0;
if (!a) {
  alert ("True");
} else {
  alert ("False");
}

let a = -3;
if (a == -3) { 
  alert ("True");
} else {
  alert ("False");
}


//задачи на логические операторы
//task 1 Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 
let a > 0 && a < 5;
if (a > 0 && a < 5) {
  alert ("True");
} else {
  ("False");
}

let a = 5;
if (a > 0 && a < 5) {
  alert ("True");
} else {
  alert ("False");
}

let a = 0;
if (a > 0 && a < 5) {
  alert ("True");
} else {
  alert ("False");
}

let a = -3;
if (a > 0 && a < 5) {
  alert ("True");
} else {
  alert ("False");
}

//task2 Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
let ((a = 0 || a = 2) + 7 / 10));
if ((!a || a = 2) + 7 / 10)) {
  alert ("True");
} else {
  alert ("False");
}

let a = 5;
if ((!a || a == 2) + 7 / 10)) {
  alert ("True");
} else {
  alert ("False");
}

let a = 0;
if ((!a || a == 2) + 7 / 10)) {
  alert ("True");
} else {
  alert ("False");
}

let a = -3;
if ((!agg || a == 2) + 7 / 10)) {
  alert ("True");
} else {
  alert ("False");
}

let a = 2;
if ((a == 0 || a == 2) + 7 / 10)) {
  alert ("True");
} else {
  alert ("False");
}

//task3  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
let a =< 1;
let b >= 3;

let showPositiveSum = a + b;
let showNegativeSum = a - b;
if (a == 1 || a < 1 && b > 3 || b == 3) {
  alert ("showPositiveSum");
} else {
  alert ("showNegativeSum");
}

let a = 1;
let b = 3;

let showPositiveSum = a + b;
let showNegativeSum = a - b;
if (a == 1 || a < 1 && b > 3 || b == 3) {
  alert ("showPositiveSum");
} else {
  alert ("showNegativeSum");
}

let a = 0;
let b = 6;

let showPositiveSum = a + b;
let showNegativeSum = a - b;
if (a == 1 || a < 1 && b > 3 || b == 3) {
  alert ("showPositiveSum");
} else {
  alert ("showNegativeSum");
}

let a = 3;
let b = 5;

let showPositiveSum = a + b;
let showNegativeSum = a - b;
if (a == 1 || a < 1 && b > 3 || b == 3) {
  alert ("showPositiveSum");
} else {
  alert ("showNegativeSum");
}


//task4 Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
let ((a > 2 && a < 11) || (b >= 6 && b < 14));
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
  alert ("True");
} else {
  alert ("False");
}

//задачи на циклы while и for
//task1 Выведите столбец чисел от 1 до 50. (в консоль и в документ html с помощью document.write) Использовать два типа циклов, while и for 
let i = 1;
while (i <= 50) {
  document.write(i + "<br>");
  i++;
}


for (let i = 1; i <= 1; i++) {
  document.write(i + "<br>");
}

//task2 Выведите столбец чисел от 1 до 100.
let i = 1;
while (i <= 100) {
  document.write(i + "<br>");
  i++;
}

for (let i = 1; i <= 1; i++) {
  document.write(i + "<br>");
}

//task3 Выведите столбец чисел от 11 до 33.
let i = 11;
while (i <= 33) {
  document.write(i + "<br>");
  i++;
}


for (let i = 11; i <= 33; i++) {
  document.write(i + "<br>");
}


//task4 Выведите столбец четных чисел в промежутке от 0 до 100.
let num = 0;
while (num <= 100) {
  document.write(num + "<br>");
  num += 2;
}

for (i = 0; i <= 100; i += 2) {
  document.write(i + "<br>");
}

//task5 С помощью цикла найдите сумму чисел от 1 до 100. 
let sum = 1;
for (let i = 1; i <= 100; i++) {
sum += i;
}
alert(sum);

//task6 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
let n = 1000;
let num = 0;

while (n < 50) {
  num++;
  n /= 2;
}
alert(n); 
alert(num);


//tasks switch конструкции
//tasks1 Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
//реализуем ввод переменной через prompt
let num = prompt 1;
switch (num) {
  case 1:
    result = 'Зима';
    break;
  case 2:
    result = 'Весна';
    break;
  case 3:
    result = 'Лето';
    break;
  case 4:
    result = 'Осень';
    break;
}
alert(result);

//task2 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 12;
if (month >= 3 && month <= 6) {
alert('Весна');
} else if (month >= 6 && month <= 9) {
  alert('Лето');
} else if (month >= 9 && month <= 12) {
  alert('Осень');
} else if (month === 1 || month === 2 || month === 12) {
  alert('Зима');
}

//task3  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str = 'abcde';
if (str === 'a') {
  alert('Да');
} else {
  alert('Нет');
}

//task4 Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str = '12345';
if (str === 1 || str === 2 || str === 3) {
  alert('Да');
} else {
  alert('Нет');
}

//task5  Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
let str = '248';
let summa = ('2' + '4' + '8');
alert(summa);


//task6  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str = '432678';
if ('4' + '3' + '2') === ('6' + '7' + '8') {
  alert('Да');
} else {
  alert('Нет');
}