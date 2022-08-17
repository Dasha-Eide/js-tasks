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
if ((!a || a == 2) + 7 / 10)) {
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



