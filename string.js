//Задачи на строки
//0. Напишите функцию logAllChars(str), которая принимает str в качестве аргумента и выводит каждый символ строки в логи.
/*const str = 'Hello';
function logAllChars(str) {
  for (const char of str) {
  console.log(char);
  }
}
logAllChars('Hello');*/

//1. Дана строка 'frontent$developer$wow. Замените все $ на * с помощью глобального поиска и замены. 
/*let words = 'frontent$developer$wow';
console.log(words.replaceAll('$', '*'));*/

//2.  Напишите функцию convertStringToArray(str), которая преобразует строку в массив слов.
/*const str = 'I am learning frontend development';
const convertStringToArray = (str)=> str.trim().split(" ");

  const result = convertStringToArray(str);
  console.log(result);

//3.Напишите функцию removeSymbols(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
/*const str = 'I am learning frontend development';
const removeSymbols = (str, length)=> str.slice(length);

const result = removeSymbols(str, length);
  console.log(result);*/


//4. Напишите функцию pasteDashesIntoString(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
/*const str = 'I am learning frontend development';
const pasteDashesIntoString = (str) => str.toUpperCase().split(' ').join('-');

const result = pasteDashesIntoString(str);
  console.log(result);*/

//5. Напишите функцию makeStringLowerCased(str), которая принимает строку str в качестве аргумента и переводит в нижний регистр.
/*const str = 'I am learning frontend development';
const makeStringLowerCased = (str)=> str.toLowerCase();

const result = makeStringLowerCased(str);
  console.log(result);*/

//6.Напишите функцию capitaliseAllWords(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
/*const str = 'I am learning frontend development';
const capitaliseAllWords = (str) => str.split(" ")
  for (let i = 0; i < str.length; i++ ) {
    console.log(str[i] = str[i][0].toUpperCase() + str[i].substr(1));
  }
  str.join(" ");
  capitaliseAllWords();*/


//7. Напишите функцию makeFirstLetterUpperCased(str), которая принимает строку str в качестве аргумента и делает первую букву заглавной.
/*const str = 'I am learning frontend development';
const makeFirstLetterUpperCased = (str)=> str.charAt(0).toUpperCase() + str.slice(1);

const result = makeFirstLetterUpperCased(str);
  console.log(result);*/

//8. Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и заменяет регистр каждого символа на противоположный. Например, если вводится «Я иЗуЧаЮ ФрОнТеНд», то на выходе должно быть «я ИзУчАю ФрОнТеНд».
/*const str = 'Я иЗуЧаЮ ФрОнТеНд';
const changeLetterRegister = (str) => {
  let newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  console.log(newStr)
}
console.log(changeLetterRegister(str));*/


//9.Напишите функцию changeLetterRegister(str), которая принимает в качестве аргумента строку и делает в ней все символы разного регистра по порядку. Например, если вводится «джаваскрипт», то на выходе должно быть «дЖаВаСкРиПт».
/*const str ="джаваскрипт";
const changeLetterRegister = (str) => {
  let newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  console.log(newStr)
}
console.log(changeLetterRegister(str));*/



//10.Напишите функцию addZeros(num, len, sign), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.
/*const addZeros = (num, len, sign) => {

}*/



//11.Напишите функцию compareStrings(str1, str2), которая сравнивает строки без учёта регистра символов.
/*const str1 = 'string';
const str2 = 'JavaScript';
const compareStrings = (str1, str2) => {
console.log(str1 === 'StRiNg');
console.log(str2 === 'JavaScriptonite');
}
compareStrings();*/

//12. Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз. 
// сначала реализовать черед метод repeat, потом самим через циклы
/*const repeatStr = (str, n = 5) => str.repeat(n)
console.log(repeatStr('Hello'));*/

/*const repeatStr = (str, n = 5) => {
  for (let i = 0; i < n; i++) {
    console.log(repeatStr[i]);
    console.log("hello");
  }
}*/

//13. Напишите функцию getPathname(pathname), которая находит имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
/*const pathname = "/home/user/landing/index.js";

const getPathname = (pathname) => { 
  if (pathname.indexOf('index.js') != -1) {
    console.log('index.js');
  }
};

  getPathname(pathname);*/


//14. Напишите функцию getSubstring(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.
/*const str = 'Javascript — синхронный язык программирования';

function getSubstring(str, char, pos) {
if (pos === 'after') {
  console.log(str.slice(str.indexOf(char) + 1));
}else if (pos === 'before') {
  console.log(str.slice(0, str.indexOf(char)));
}
};

getSubstring(str, '—', 'after');
getSubstring(str, 'язык', 'before');*/







//Задачи на массивы
//0. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
/*const str = ['123456789'];
for (i = 0; i < str.length; i++) {
  document.write(str[i]);
}*/

//1. Нарисуйте пирамиду, как показано ниже только у вашей пирамиды должно быть 12 рядов:
/*let str = " ";
for (let i = 0; i < 12; i++) {
  str = str + "x";
  document.write(str + "<br>");
}*/

//2. С помощью двух вложенных циклов нарисуйте следующую пирамидку:
/*let str = " ";
for (let i = 0; i <= 9; i++) {
  for (let k = 1; k <= i; k++) {
    document.write(i);
  }
  document.write("<br>");
}*/

//3.Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом 
/*let str = " ";
for (let i = 0; i < 5; i++) {
  str = str + "xx";
  document.write(str + "<br>");
}*/

//4.Пирамидка с цифрами
/*let str = " ";
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
  document.write(i);
  }
  document.write("<br>");
}*/

//4. Пирамидка с цифрами
/*1
22
333
4444
55555
666666
7777777
88888888
999999999
let str = " ";
for (let i = 0; i <= 9; i++) {
  for (let k = 1; k <= i; k++) {
    document.write(i);
  }
  document.write("<br>");
}*/

//5. Напишите функцию goThroughArray(list), которая проходится по массиву и выводит каждый элемент.
/*const list = [1, 2, 3, 6, 8];
const goThroughArray = (list) => {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}
goThroughArray(list);*/


//6. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
/*let letters = ['a', 'b', 'c'];
let numbers = [1, 2, 3];
letters.push(...numbers);
console.log(letters);*/

//7. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
/*let letters = ['a', 'b', 'c'];
letters.push(1, 2, 3);
console.log(letters);*/

//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
/*let numbers = [1, 2, 3, 4, 5];
numbers.splice(0, 5, 1, 4, 5);
console.log(numbers);*/

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
/*let numbers = [1, 2, 3, 4, 5];
numbers.splice(0, 5, 2, 3, 4);
//console.log(numbers);*/

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/*let numbers = [1, 2, 3, 4, 5];
numbers.splice(0, 5, 1, 2, 3, 'a', 'b', 'c', 4, 5);
console.log(numbers);*/

//12. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
/*let numbers = [3, 4, 1, 2, 7];
numbers.sort();
console.log(numbers);*/

//13. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
/*let words = {
  js: 'test',
  jg: 'hello',
  css: 'world',
}
console.log(Object.keys(words));*/



//14. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. 
/*let str = '123456';
result = str.split('').reverse().join('');
console.log(result);*/

//15.Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения
/*const str = 'hello'
let newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr);*/

/*const getStr = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
console.log(getStr('hello'));*/


//16. Проверьте, что строка начинается на http://.
/*const str = 'http://zara.com';
console.log(str.indexOf('http://'));*/

//17. Проверьте, что строка заканчивается на .html
/*const str = 'index.html';
console.log(str.indexOf('.html'));*/

//18. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
/*const numbers = [1, 2, 5, 7, 9];
if (numbers.indexOf(5)) {
  console.log('Yes');
}*/

//19. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
/*const num = 31;
for (let i = 2; i < num; i++) {
  console.log(num); 
}
  if(!(num % i)) {
  console.log('False');
}*/

//20. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'
/*const num = [1345];
if (num.indexOf(22)) {
  console.log('No');
}*/

//21. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее (два цикла)
/*const num = [];
for (let i = 0; i <= 9; i++) {
  for (let k = 1; k <= i; k++) {
    document.write(i);
  }
}*/


//22. Дан массив чисел, найдите в нем максимальное число
/*const numbers = [1, 2, 3, 50, 120];
const max = Math.max.apply(null, numbers);
console.log(max);*/

//23. Дан массив чисел, найдите в нем минимальное число
/*const numbers = [10, 5, 20, 15, 100];
const min = Math.min.apply(null, numbers);
console.log(min);*/

//24. Дан массив чисел, найдите среднее арифметическое всех чисел
/*const num = [1, 2, 3, 7, 6, 7, 8, 9];
const sum = 0;
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
const result = sum / num.length;
console.log(result);*/

//25.  Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.
/*Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
* Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
* Сложность задачи: 1 of 5
* @param {number} arraySize - размер массива
* @param {?} value - значение для массива
* @returns {Array}*/

/*const fill = (arraySize, value) => {
return new Array(arraySize).fill(value);
}
console.log(fill(3, 'a'));*/

//26. Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.
/* Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
* Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
* Сложность задачи: 1 of 5
* @param {Array} array - Массив любых элементов
* @returns {Array}*/

/*const reverse = (array) => {
  for (let i = 0, d = array.length - 1; i < d; i++, d--) {
    [array[i], array[d]] = [array[d], array[i]];
  }
  return array;
};
const data = [1, 2, 3];
console.log(reverse(data));*/

//27. Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
/* Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
* Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
* Сложность задачи: 1 of 5
* @param {Array} array - Массив любых элементов
* @returns {Array}*/

/*const compact = (array) => {
  return array.filter((el) => el);
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data));*/

//28. From Pairs. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. (используем метод массива reduce)
/* Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
* Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
* Сложность задачи: 2 of 5
* @param {Array} array - массив, значения которого массивы пар
* @returns {Array}*/

/*const fromPairs = (array) => {
  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc[item[0]] = item[1];
    }
    return acc;
  }, {});
}
const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data));*/

//29. Without. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
/* Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
* Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
* Сложность задачи: 2 of 5
* @param {Array} array - Массив с примитивными значениями
* @param {?} args - лист значений для удаления
* @returns {Array}*/

/*const without = (array, ...args) => {
  let filterArray = [...array];

  for (let i = 0; i < args.length; i += 1) {
    filterArray = filterArray.filter((el) => el !== args[i]);
  }

  return filterArray;
};

const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2));*/

//30. Unique. Напишите функцию, которая убирает повторяющиеся значения.
/* Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
* Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
* Сложность задачи: 2 of 5
* @param {Array<string | number>} array - Массив с примитивными значениями
* @returns {Array}
*/
/*const unique = (array) => {
  const uniqSet = new Set(array);
  return [...uniqSet];
}

const data = [1, 2, 1, 2, 3];
console.log(unique(data));*/

//31. IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
/* Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
* Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
* Сложность задачи: 2 of 5
* @param {Array} firstArray - Массив с примитивными значениями
* @param {Array} secondArray - Массив с примитивными значениями
* @returns {boolean}*/

/*const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
    const compared = firstArray.map((el, id) => secondArray[id] === el);

  return !compared.includes(false);
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2));
console.log(isEqual(arr1, arr3));
console.log(isEqual(arr1, arr4));*/
