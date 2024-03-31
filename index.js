//Оголошення змінних

// var
// let - змінна якій в подальшом можна присвоїти нове значення
// const - змінна яку в подальшому не можна перевизначити

// let age = 5;
// console.log(age);
// age 10:
// console.log(age);

// const age 5;
// console.log(age);
// age 10:
// console.log(age);

//let username;
//console.log(username);

// Примітивні типи

// Number - цілі числа 1 числа з плаваючою комою (крапкою)
// String - рядок який починається одинарними ' АБО ""
// Boolean логічний тип даних, який має всього два значення true & falce
// null значення яке означає ніщо.
// undefined значення не визначено

//const string = "string";

// Оператоp typeof вказує тип даних
// let username;
// console.log(typeof username);

//Виведення даних
// console.log("Виводимо дані в консоль!");
// alert("Виводимо дані на екран!");

// Отримання даних
// confirm() виводить модальне вікно з повідомленням а дві кнопки Ok(true) & Cancel(false)
// const isComing = confirm("Будь ласка, підтвердіть бронювання готелю");
// console.log(isComing);

// prompt() виводить модальне вікно з полем вводу 1
// кнопками Ok(те що ввів користувач) 1 Cancel(null)
// const value prompt("Будь ласка ведіть номер готелю");
// console.log(typeof value);
// console.log(value);

// Основні оператори

// Математичні опеератори
// const x = 5;
// const y5;
// Додавання
// console.log(x + y);
//Віднімання
// console.log(x - y);
//Множення
// console.log(xy);
//Ділення
// console.log(x/ y); //остача від ділення
// console.log(xy);
// x & у операнди
//*/+- оператори

//Оператори порівняння

//a > b i a < B - більше/меньше
//a >= b i a =< в - більше/меньше або дорівнює
// a == b - рівність
// а != b - нерівність
// a === b - рівність
// а !== b - нерівність

//console.log(5 == "5");
//console.log(5 === "5");

// Числа
// console.log(Number);
//console.log(Number("5"));
// console.log(+"5");
// console.log(+"1 df"); // NaN
//console.log(Number.parseInt("5.2 рх")); // повертає ціле число з рядка.
// console.log(Number.parseFloat("5.2 рх ")); // павристь з рядка дробове число.

// const invalidNumber = Number("qweqwe");
// console.log(Number.isNaN(invalidNumber));
// Class Math

//console.log(Math.floor(1.7)); // повертає найменьше ціле число
//console.log(Math.ceil(1.1)); // повертає найбільше ціле число
//console.log(Math.round(1.5)); // повертає число заокруглене до найближчого цілого
//console.log(Math.max(20, 30, 40, 50)); // повертає найбільше ціле
//console.log(Math.min(20, 30, 40, 50)); // повертає найменьше ціле
//console.log(Math.pow(2, 4)); // підносимо до степеня
//console.log(Math.sqrt(16)); //визначає квадратний корінь
//console.log(Math.random()); //Повертає псевдо випадкове число в діапазоні від 0 до 1

// const message = "mango " + "is " + "happy";
// console.log(message);
// console.log(1 + "2");
// console.log(1 + "2" + 4);
// console.log(1 + 2 + "4");
// console.log(`Наше сповіщення та змінна зверху ${message} `);

// const userName = "Sophia";
// const roomNumber = 207;

// const greeting = `Доброго дня ${userName} вітаємо в нашому готелі, ваш номер ${roomNumber}`;
// console.log(greeting.length);

//.length- властивіть щоб дізнатись довжину рядка
//.toLowerCase()-повертає рядок в нижньому регістрі
//.toUpperCase()-повертає рядок в верхньому регістрі
//.includes()- перевіряє чи міститься підрядок в рядку
//.endsWith() - дозволяє визначити чи заверхується рядок символами

// Логічні оператори
// and &&, логічне і
// вираз && вираз
//const age = 20;
//console.log(age > 10 && age < 30);
//or ||,
//const age = 40;
//console.log(age < 10 || age > 30);
//
//not!
//console.log(!true);
//

// Розгалуження
// if (condition) {
//  тіло функції
// }

// if (condition) {
// //true
// } else {
// //false

// const carYears = 10;
// if (carYears > 10) {
//   console.log("Машина стара");
// } else {
//   console.log("Машина нова");
// }

// короткий вираз розгалуження

// <умова>? <вираз якщо умова правдива> <вираз якщо умова хибна>>
// carYears > 10 ? console.log("Машина стара") : console.log("Машина нова");

// let cost;

// const subscription = "premium";
// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;
//   case "pro":
//     cost = 100;
//     break;
//   case "premium":
//     cost = 500;
//     break;
//   case "large":
//     cost = 300;
//     break;
//   case "small":
//     cost = 120;
//     break;

//   default:
//     console.log("не вірна підписка");
//     break;
// }

// console.log(cost);
//
// const num = 24;
// if (num % 2 === 0) {
//   console.log(`${num} - парне`);
// } else {
//     console.log(`${num} - не парне`);
// }

//глобальна область визначення Використовується за замовчування

// const global = "global";
// if (true) {
//   const blockA = "block A";

//   console.log(global); // глобальна зміна
//   console.log(blockA); // локальна область А
//   console.log(blockB); // blockB is not defined
//   console.log(blockC); // blockC is not defined
//   if (true) {
//     const blockB = "block B";
//     console.log(global); // глобальна зміна
//     console.log(blockA); // block A
//     console.log(blockB); // block B
//     console.log(blockC); // blockC is not defined
//   }
// }

// if (true) {
//   const blockC = "block C";
//   console.log(global); // глобальна зміна
//   console.log(blockC); // block C
//   console.log(blockA); // block A is not defined
//   console.log(blockB); // block B is not defined
//   }
//   console.log(global); // глобальна зміна
//   console.log(blockA); // block A is not defined
//   console.log(blockB); // block B is not defined
//   console.log(blockC); // block C is not defined

// Цикли
// while (condition) {
//  //код, тіло циклу
// }

// let counter = 10;
// let counter1 = 10;
// while (counter < 10) {
// console.log("counter while: ", counter);
// counter += 1;
// }

// do {
// } while (condition);
// do {
// console.log("counter do while: ", counter1);
// counter1 += 1;
// } while (counter1 < 10);
// for (initialization; condition; post-expression) {
// // statements
// }

// for (let i = 0; i < 10; i++) {
// console.log(1);
// for (let i = 0; i < 10; i++) {
// console.log(1);
// if (15) {
// console.log("Знайшли число 5, перериваємо цикл!");

// break;
// }
//}

// const num = 10;
// for (let i = 0; i < num; i++) {
// if (1% 2 == 0) {
// continue;
// }
// console.log("Непарне 1: ", i);
// }

// const max = 10;
// for (let i = 0; i < max; i++) {
// console.log("${max}%${1}=`, max 1);

// }

// const start = 5;
// const end = 44;
// let totalsum = 0;
// for (let q = start; q <= end; q++) {
//   if (q % 2 === 0) {
//     totalsum += q;
//   }
// }
// console.log(totalsum);

// console.log(foo(13));
// знайдіть суму всіх парних чисел в діапазоні
// const start = 5;
// const end = 44;
// let totalSum = 0;

//Масив - структура даних для зберігання і маніпулювання колекцією індексованих значень.
// Використовується для зберігання впорядкованих колекцій даних,
// наприклад, списку курортів, товарів, клієнтів в готелі тощо.

// const clients = ["Ivan", "Dima", "Olga"];
// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);
// console.log(clients.length);
// // ітерація по масиву
// for (let i = 0; i < clients.length; i++) {
//   console.log(clients[i]);
// }

//цикл for ... of
// for (const variable of iterable)
// for (const client of clients) {
//   console.log(client);
// }
// Присвоєння за посиланням і за значенням
// let a = 5;
// let b = a;
// console.log(a); //5
// console.log(b); //5
// a = 10;
// console.log(a); //10
// console.log(b); //5

// Методи масиву - структура даних для зберігання та маніпулювання колекціїю індексованих значень
// split(delinetr)- перетворює рядок в масив, розбиваючи його роздільнико деліметр.
// Якщо роздільник це порожній рядок, то створиться масив окремих символів. Роздільнико може бути 1 або декілька сиволів.
// const name = "Banana";
// console.log(name.split(""));
// const message = "JavaScript це цікаво";
// console.log(message.split(""));

//join(delimiter) об'єднує елементи масиву у рядок.
// У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter.
// Тобто ця операція протилежна методу рядків split(delimiter).
//  const words = ["JavaScript", "-", "це", "цікаво"];
//  console.log(words.join(""));
//  console.log(words.join(" "));
//  console.log(words.join("-"));

// const fullName = "Тарас Шевченко";
// console.log(fullName.split(" "))
// const fullName2 = fullName.split(" ");
// console.log(fullName2.reverse())
// const fullName3 = fullName2
// console.log(fullName3.join(", "))

// //Метод push() додає один або декілька елементів
// // наприкінці масиву, без необхідності зазначати індекси елементів, що додаються.
// // Повертає довжину масиву після додавання елементів.
// //
// //Метод рор() видаляє останній елемент з кінця масиву і повертає видалений елемент.
// //Якщо масив порожній, метод повертає undefined.

// const carNames = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW'];
// for(const cars of carNames){
//     console.log(car)
// }

// const cars = [
//     { brand: 'Toyota', model: 'Camry', year: 2022 },
//     { brand: 'Honda', model: 'Accord', year: 2021 },
//     { brand: 'Ford', model: 'Mustang', year: 2023 },
//     { brand: 'Chevrolet', model: 'Malibu', year: 2022 },
// ]
// const bmw ( brand: 'BMW', model: 'XO', year: 1922 );

// cars.push(bmw);
// console.log(cars);
// for (let i = 0; i < cars.length; i++) {
// console.log(cars[i].model);
// }

// stice (begin, end) повертає новий масив, який містить копію частини вихідного масиву, не змішечи його.
// Копія себорасться починаючи від begin i do, ane нe timeчнo do end
// const carNames = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW'];
// console.log(carNames.slice(1,3))

//splice(position,num) - position durзує на поліція або на індекс первого елемента
//для видаления, пот вистачає к-сть елементів, мо Видалнаться

// const score = [1,2,3,4,5];
// const deletescores = score.splice(0, 3);
// console.log(deletescores);
// console.log(score);

// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
// Наприклад, у нас є масив з назвами кольорів у вигляді рядків. Додамо новий колір перед елементом з індексом 2.

// const oldcl = ["source", "film", "maker"];
// const newcl = ["godsource", "CS"];
// const allcl = oldcl.concat(newcl);
// console.log(allcl);

// concat - обйеднуэ 2 масива

// функція - підпрограма або незалежна частина коду призрачена для багато-разового виконання конкретної задачі з
// різним початковим значення.

// оголошення функції:
// function multiply() {
//     console.log("Це лог на момент віклику фунції multiply");
// }

// Виклики функції:
// multiply()
// multiply()
// multiply()

// Оголошення параметрів:
// function plus(a,b,c) {
//     console.log(`результат додавання параметрів a,b,c = ${a+b+c}`)
// }

// параметри - це локальні зміні які доступні тільки у тілі функції. вони розділяються комами.
// Параметрів може будти декілька або взагалі не будти.

// передача аргументів a,b,c:
// plus(2,3,5)

// function declaration

// function math(a = 2,b = 2,c = 2) {
//     console.log(`результат - ${a*b*c}`)
//     return a*b*c
//     console.log(`log`)
// }
// console.log(`log до виклику`)

// // return - предача значення з тіла функції у зовнішній код. Після нього код не виконується.

// math(17,6,25)
// console.log(`log пілся виклику функції`)
// math()

// function expretion

// const multiply = function (a,b,c) {
//     console.log(`результат - ${a*b*c}`)
// }

// multiply(4,5,6)

// обл. видимості - scope - механізм. який визначає доступність зменних у коді що виконується

// const GlobalVelue = "GlobalVelue";
// console.log(GlobalVelue)
// function foo() {
//     console.log(GlobalVelue)
//     const LocalValue = "LocalValue"
//     console.log(LocalValue)
// }

// foo()
// console.log(LocalValue);

// const randomNumber = function (min,max) {
//     console.log(Math.round(Math.random() * (max - min) + min));
// }
// randomNumber(50,1000)

// lifo - останьим прийшов - першим ушов

// function fnA() {
//   console.log("Лог в середені функції fnA до виклику функції fnB");
//   fnB();
//   console.log("Лог в середені функції fnA після виклику функції fnB");
// }
// function fnB() {
//   console.log("Лог в середені функції fnB");
// }
// console.log("Лог до виклику функції fnA");
// fnA();
// console.log("Лог після виклику функції fnA");

// const books = [
//     {
//         title: "the lust kingdom",
//         author: "Bernard Cornvell",
//         rating: 8.38,
//     },
//     {
//         title: "Calm waters",
//         author: "Robert Shekli",
//         rating: 8.38,
//     },
//     {
//         title: "Tichina",
//         author: "qwer",
//         rating: 8.38,
//     },
// ];
// for (const book of books) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
// }

// const bookAuthors = []

// for (const book of books){
//     let k1 = book.title

// }String.toUpperCase("Піди кудись")

// function up(string) {
//     return string.toUpperCase()
// }

// console.log(up("Добрий день"))
// console.log(up("Добрий вечір"))

// function m(a,b) {
//     return a*b
// }

// console.log(m(10,10))

// const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nums2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const allNums = [...nums1, ...nums2];
// console.log(allNums);

// const first = {
//   prop1: 5,
//   prop2: "TARAS",
// };
// const second = {
//   propc: false,
// };
// const object = {
//   ...first,
//   ...second,
// };
// console.log(object);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Corneval",
//     rating: 8.38,
//     isPublic:true
// };

// Деструктуризация:

// const accessType = book.isPublic ? "публічному": "закритому";
// const message = `Книга ${book.title}, автора ${book.author}, з рейтингом ${book.rating} знаходиться в ${accessType} доступі`;
// const {title, rating, author, isPublic} = book;
// const accessType1 = isPublic ? "публічному": "закритому";
// const messagel = `Книга ${title}, автора ${author}, з рейтингом ${rating} знаходиться в ${асcessType} доступі`;
// console.log(message);
// console.log(message);

// function greet(name) {
//     console.log(`Ласкаво просимо ${name}`);
// }

// console.log(greet ("Апельсин"));

// console.log(greet);
// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}`);
//     callback(name);
// }
// registerGuest("Апельсин", greet);

// функція вищого порядку - функція яка приймяє в якості параметрів інші функції, або повертає функцію у якості результатів.
// callback - функція яка передається іншій функції як аргумент а та в свою чаргу викликає передану функцію
// const num = [1,2,3,4,5,6,7,8,9]

// num.forEach(function (item, index, array){
//     console.log(`Індекс${index}, значення: ${item}`);
//     console.log(array);
// });

//поелементно перебирає масив
//викликає калбек функцію до кожного елемента масиву
// нічого не повертає

// const num = [1,2,3,4,5,6,7,8,9,10]
// let cal = 0
// num.forEach(function(number) {
//   cal = cal+number
// });

// console.log(cal)

// forEach = метод для перебору функції

// const numbers = [5, 10, 15, 20, 25];
//   numbers.forEach(function (item, index) {
//   console.log(`Індекс:${index}, значення:${item}`);
//   });
//   numbers.forEach((item, index) => {
//   console.log(`Індекс: ${index}, значення: ${item}`);
//   });
//   const logMessage = (item, index)=>{
//   console.log(`Індекс:${index}, значення:${item}`);
//   }
//   numbers.forEach(logMessage)

// const num = (a, b) => {
//   console.log(a * b);
// };
// num(10, 5);

// array.method((item, index, arr)=>{
// логіка, яка буде застосоуватись на кожній ітерації
// )}

// map:
// по-елементно перебирає оригінальний масив
// не змінює оригінальний масив
// результат роботи записує в новий масив
// повертає новий масив однакової довжини

// const planets = ["Земля", "Марс", "Венера", "Юпітер", "Сатурн"];
// const planetToUpperCase = planets.map((planet, index, arr) => {
//   return planet.toUpperCase();
// });
// console.log(planets);
// console.log(planetToUpperCase);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const studentsName = students.map((student)=>{
//   return student.name
// })
// console.log(studentsName)

// const number = [1,2,3,4,5,6,7,8,9,10,11,,12,13,14,15,16,17,18,19,20]
// let suma = 0
// number.forEach(function(number){
//   if (number % 2 === 0){
//     suma += number;
//   }

// });

// const students = [
//   { name: 'Анна', grades: [90, 85, 88] },
//   { name: 'Петро', grades: [78, 92, 80] },
//   { name: 'Оксана', grades: [85, 87, 92] },
// ];
// let mas = [];
// students.forEach(function (student) {
// let k = student.grades;
// let middlescore = 0;
// k.forEach(function (number) {
// middlescore = middlescore + number;
// });
// middlescore = Math.round(middlescore /k.length);
// console.log(${student.nате} середній бал ${middlescore});
// mas.push({...student,grades:middlescore})
// });
// console.log(mas)

// flatmap - аналогічний методу map, але застосовуеться у випадка коли багато-виміряний масим треба розгладити.
// метод filter - використовується для одной операції - фильтрація масиву (коли потібно вибрати більше одного елемента за певним крітерієм)

// filter - не змінює орігінальний масив
// перебирає масив по елементно
// повератє новий масив
// додає в масив що поверається елементи, які задовільнають callback функції.
// якщо жоден елемент не задовільнив умови, повертає порожні масиви.
//
// const values = [14, -41, 44, 21, -27, -68, 41, -37];
// const positive = values.filter((value) => value >= 0);
// console.log(positive);
//
// const negative = values.filter((value) => value < 0);
// console.log(negative);

// find - дозволяє знайти і повернути перший відповідний Елемент, після чого перебирання массиву припиняється.
// find - не змінює орігінальний масив
// перебирає масив по елементно орігінальний масив
// поверає перший елемент, що задовільняє умову.
// якщо жоден елемент не задовільнив умову - повернає undefined.
//
// const findValues = positive.find(number => number === 44)
// console.log(findValues)

// findindex - find але працює у масивах-примітивах, так і у масиві обєктів.
// findindex - не змінює орігінальний масив
// перебирає масив по елементно орігінальний масив
// поверає перший індекс-елемента, що задовільняє умову.
// якщо жоден елемент не задовільнив умову - повернає -1.
//
// const fruits = [
//   { id: 1, name: "banana", color: "yellov" },
//   { id: 2, name: "lemon", color: "yellov" },
//   { id: 3, name: "apple", color: "yellov" },
//   ];
//   console.log(fruits.find((fruit) => fruit.id === 2));
//   console.log(fruits.findIndex((fruit) => fruit.id === 2));

// every - перевіряє чи проходять всі елементи масиву тест callback функції. Повертає true або false
// перебирає масив по елементно орігінальний масив
// не змінює орігінальний масив
// перебирання масиву припиняється, якщо callback повертає false
//
// const fruits = [
//   { id: 1, name: "banana", color: "yellov" },
//   { id: 2, name: "lemon", color: "yellov" },
//   { id: 3, name: "apple", color: "yellov" },
//   ];
// console.log(fruits.find((fruit) => fruit.id === 2));
// console.log(fruits.findIndex((fruit) => fruit.id === 2));
// console.log(fruits.every((fruit) => fruit.color === 'yellov'));

// some - перевіряє чи хочаб один елемент масиву проходить тест callback функції. Повертає true або false.
// перебирає масив по елементно орігінальний масив
// не змінює орігінальний масив
// перебирання масиву припиняється, якщо callback повертає true
//
// console.log(fruits.some((fruit) => fruit.color === 'yellov'));

// reduce - використовується для послідовної обробки кожного елементу масиву із збереженням проміжного результату.(як акум)
// не змінює орігінальний масив
// перебирає масив по елементно орігінальний масив
// повертає і робить все що завгодно.
//
// const fruits = [
//   { id: 1, name: "banana", color: "yellov", price: 990},
//   { id: 2, name: "Lemon", color: "yellov", price: 345 },
//   { id: 3, name: "apple", color: "yellov", price: 234},
//   ];
//   const totalPrice = fruits.reduce((prevValue, element) => {
//   return prevValue + element.price;
//   },0);
//   console.log(totalPrice);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const totalScore = students.reduce((prevValue, element) => {
//   return prevValue + element.score;
// },0);
//
// console.log(totalScore)
//
// prevValue - акум (0 на 735)
// element - 727-731 стрічка

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const totalLikes = tweets.reduce((prevValue, element) => {
//   return prevValue + element.likes;
//   },0);

// console.log(totalLikes)

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores);

// array.sort((a,b){
// тіло колбек функції
// })

// const sortedScores = [...scores]
//   .sort((a, b) => a - b)
//   .map((i) => i * 2)
//   .map((i) => i * 10);
// console.log(sortedScores);

// const students = ["Bika", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// const inAlphabet = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabet);
// const str1 = "абрикос";
// const str2 = "яблоко";
// const result = strl.localeCompare(str2);
// console.log(result);

// sort - сортуе і змінює вихідний масив.
// повертає змінений масив (тобто посилання на відсортований вихідний)
// дефлтно сортує за зростанням.
// сортування відбувається шляхом приведення значень до рядка і порівняня порядкових номерів у таблиці UniCode.

// const books = {
//   authors: ["Бернард Кроунвел", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(books.getAuthors());
// books.addAuthor("Леся Українка");
// console.log(books.getAuthors());

// class User {
//   constructor(name, email) {
//   this.name = name;
//   this.email = email;
//   }
//   getEmail() {
//   return this.email;
//   }
//   changeEmail(newEmail) {
//   this.email = newEmail;
//   }
// }

// const polly = new User("Polly", "Polly@gmail.com");
// console.log(polly);
// const mango = new User("Mango", "Mango@gmail.com");
// console.log(mango);
// console.log(polly.getEmail());
// polly.changeEmail("newPolly@gmail.com");
// console.log (polly.getEmail());

// DOM - Document Object Model - незалежний від мови програмування інтерфейс, для роботи
// з HTML документом.

// BOM - незалежний від мови програмування інтерфейс, для роботи
// з вкладкую браузера

// Для навігації по цій ієрархії елементи мають наступні властивості.

// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

// const body = document.querySelector("body"); //в кавичках наз console.log(body);
// const lishky = document.querySelectorAll(".item"); console.log(lishky);
// const img = document.querySelector("img");
// console.log(img);
// console.log(img.src);
// const text = document.querySelector(".text");
// console.log(text);
// console.log(text.textContent);
// const changeText = "Ми змінили текст у параграфі";
// text.textContent=changeText;
// console.log(changeText)

// const list = document.querySelector(".list")
// console.log(list)

// list.classList.add("active") // classList.add - додає класс до списку класів елемента.

// list.classList.remove("active") // classList.remove - убирає класс до списку класів елемента.

// list.classList.toggle("active") // classList.toggle - Якщо класс відсутній - додає, присутний - убирає.

// list.classList.contains("active") // classList.contains - повертає true або false в залежності від наявності класу у елемента.

// властивість style:

// list.style.backgroundColor = 'teal'

// const box = document.createElement("div") // Створюємо div

// const heading = document.createElement("h1")
// heading.textContent = "hello world"
// body.append(heading)

// const image = document.createElement("img")
// image.src = "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="
// image.alt = "picture"
// body.append(image)

// append - додає один, або декілька елементів в кінці сторінки
// prepend - додає один, або декілька елементів на початку сторінки
// after - додає один, або декілька елементів після елемента.
// before - додає один, або декілька елементів перед елементом.

// Дз: добавити до кожної лі тег А, в якому є href, до нього додати #, до А якийсь текст (методом перебору масиву)

// let list = document.querySelectorAll(".item")
// console.log(lis)
// let liA = document.createElement("a");
// lis.forEach(function(li) {
// let liA = document.createElement("a");
// });

// remove() - видалення елемента

// const text = document.querySelector(".text")
// // text.remove()
// console.log(text.innerHTML)
// // innerHTML - доступная як і для читання, так і для запису.

// const body = document.querySelector("body");
// console.log(body.innerHTML)
// text.innerHTML="це новий текст який ми помістили"

// apend приймає одне з 4 значень
// "beforebegin" - помістити стринг перед лементом.
// "afterbegin" - вставляе всередені елемента перед всіма дітьми.
// "beforeend" - вставляе всередині елемента після усіх дітей.
// "afterend" - вставляе після елемента

// const fruitsArray = [
//   { name: "Apple", color: "Red", taste: "Sweet" },
//   { name: "Banana", color: "Yellow", taste: "Sweet" },
//   { name: "Orange", color: "Orange", taste: "Citrusy" },
//   { name: "Grapes", color: "Purple", taste: "Sweet" },
//   { name: "Strawberry", color: "Red", taste: "Sweet" },
//   { name: "Kiwi", color: "Brown", taste: "Tart" },
//   { name: "Mango", color: "Orange", taste: "Sweet" },
//   { name: "Pineapple", color: "Yellow", taste: "Tangy" },
//   { name: "Watermelon", color: "Green", taste: "Juicy" },
//   { name: "Peach", color: "Orange", taste: "Sweet" },
// ];

// const list = document.createElement("ul");
// body.append(list);
// const items = fruitsArray.map((item) => {
// console.log(item);
// let color = item.color.toLowerCase();
// return <li style="background-color: ${color};"> <p>${item.name}</p>
// <p>${item.taste}</p>
// </li>;
// });
// console.log(items.join(""));
// list.innerHTML = items.join("");

// addEventListener - додає слухача подій на елемент
// addEventListener(Event, handler, Option);
// event - імя події, рядок наприклад click"
// handler -це колбек функція, яка буде викликана під час настання події
// Option необовязковий обєкт параметрів, який розширює функції
// const button = document.querySelector(".btn")
// console.log(button)
// button.addEventListener("click", ()=>{
//   //callback
//   console.log("ратататат");
// })
// const handleclick = (event)=>{
//   event.preventDefault()
//   console.log(event)
//   console.log("нажали кнопку через handleClick")
// }
// button.addEventListener("click", handleclick)

// removeEventListener - видаляє слухача події за елемента

// обєкт подіїм
// обєкт клави
// keydown keyup - події при натискані клавіш

// document.addEventListener("keydown", (event) => {
//   console.log("keydown", event);
//   });
//   document.addEventListener("keyup", (event) => { console.log("keyup", event);
//   });
//   document.addEventListener("keydown", (event) => { event.preventDefault();
//   if ((event.ctrlKey || event.metakey) && event.code === "Keys") {
//   console.log("ctrl+s");
//   }
//   });

// const box = document.querySelector(".box");
// document.addEventListener("keydown", (event) => {
//   console.log(event)
//   if (event.code === "KeyW") {
//     box.style.backgroundColor = "white";
//   } else if (event.code === "KeyE") {
//     box.style.backgroundColor = "yellow";
//   } else if (event.code === "KeyQ") {
//     box.style.backgroundColor = "red";
//   }
// });

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const ul = document.querySelector(".ingredients")
// ingredients.forEach((ingredient) => {
// const li = document.createElement("li");

// li.textContent = ingredient;
// li.classList.add("item");
// ul.appendChild(li)

// });

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const ul = document.querySelector(".gallery");
// images.map((image) => {
// const li = `<li><img src="${image.url} alt="${image.alt} class="img"></li>`;

// ul.insertAdjacentHTML("afterbegin", li)
// });
// console.log(ul)

// ________________________________________________________

// const dec = document.querySelector(".dec");
// const inc = document.querySelector(".inc");
// const valueSpan = document.querySelector('.value');

// console.log(valueSpan)
// console.log(dec)
// console.log(inc)

// let counterValue = 0;
// dec.addEventListener('click', function() {
//   counterValue -= 1;
//   updateCounter();
// });

// inc.addEventListener('click', function() {
//   counterValue += 1;
//   updateCounter();
// });

// function updateCounter() {
//   valueSpan.textContent = counterValue;
// }

// const inP = document.querySelector(".name-input")
// const outP = document.querySelector(".name-output")
// console.log(outP)
// inP.addEventListener("input", ()=>{
// inP.value === ""? outP.textContent="Anonymous":outP.textContent = inP.value
// })

// const inPut = document.querySelector(".validation-input")
// inPut.addEventListener('blur' ,()=> {
// const strLenght = parseInt(inPut.getAttribute("data-lenght"))
//     if(strLenght !== inPut.value.lenght){
//         inPut.classList.remove("valid")
//         inPut.classList.add("invalid")
//     }
//     else{
//         inPut.classList.remove("invalid")
//         inPut.classList.add("valid")
//     }
// })

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// console.log(getRandomHexColor());
// const body = document.querySelector("body");
// const button = document.querySelector(".change-color");
// console.log(button);
// button.addEventListener("click", () => {
//   body.style.backgroundColor = `${getRandomHexColor()}`;
//   const span = document.querySelector("span")
//   span.textContent = `${getRandomHexColor()}`
// });

// function getRandomHexColor() {
//       return `#${Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, 0)}`;
//     }
//     const input = document.querySelector(".number")
//     const create = document.querySelector(".button")
//     const destroy = document.querySelector(".buttonOne")
//     const boxes = document.querySelector(".boxes")

//     function createBoxes(amount){
//         let size = 30
//         for (let i = 0; i <amount; i++) {
//             const box = document.createElement("div")
//             box.style.width = `${size}px`
//             box.style.height = `${size}px`
//             box.style.backgroundColor = `${getRandomHexColor()}`
//             body.appendChild(box)
//             size = size + 10
//         }
//     }
//     function createBoxes(amount){
//         let size = 30
//         for (let i = 0; i <amount; i++) {
//             const box = document.createElement("div")
//             box.style.width = `${size}px`
//             box.style.height = `${size}px`
//             box.style.backgroundColor = `${getRandomHexColor()}`
//             boxes.appendChild(box)
//             size = size + 10
//         }
//     }
//     function destBox() {
//         boxes.innerHTML = ""
//     }
//     create.addEventListener("click", ()=> {
//         if (input.value>200){
//             createBoxes(200)
//         }
//         else (input.value)
//         createBoxes(input.value)
//     })
//     destroy.addEventListener("click", ()=> {
//         destBox()
//     })

// const colorPalette = document.querySelector(".color__palette");
// const outPut = document.querySelector(".output");
// const getRandomHexColor = () => {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// };
// console.log(getRandomHexColor());

// const createPalletteItem = () => {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.dataset.color = color
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   console.log(items);
//   console.log(colorPalette);
//   colorPalette.append(...items);
// };

// createPalletteItem();
// const selectcolor = (event) =>{
// if(event.target.nodeName!=="BUTTON"){
//     return
// }
// const selectcolor = event.target.dataset.color
// }
// colorPalette.addEventListener("click",selectcolor)

// const output = document.querySelector(".output");
// let scrollEventCounter = 0;
// let debaunsTimeOut
// document.addEventListener("scroll", () => {
// scrollEventCounter += 1;
// output.textContent = scrollEventCounter;
// });

// const debauns = (func,delay) => {
// clearTimeout(debaunsTimeOut)
// debaunsTimeOut = setTimeout(func,delay)
// }

// const handleScroll = () =>

// локальні сховища - частина браузера
// setItem(kay, value) - створює новий або основлює запис у сховище.
// getItem(key) - повертає зі сховища значення із ключем key
// clear - очищає всі записи у сховищі

// localStorage.setItem("ui-them", "light")
// const settings = {
//     them:"dark",
//     options:[1,2,3],
//     notification: false,

// }

// localStorage.setItem("settings", JSON.stringify(settings))
// const them = localStorage.getItem("ui-them")
// console.log(theme)
// const settingsData = localStorage.getItem("settings")
// console.log(settingsData)
// const settingsObject = JSON.parse(settingsData)
// console.log(settingsObject)
// const mas = ["ququ", 1,2,3, "123"]
// localStorage.setItem("mas",JSON.stringify(mas))

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const them = localStorage.getItem("them");
if (them) {
  body.classList.add(them);
} else {
  localStorage.setItem("them", "light");
  body.classList.add("light");
}
btn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("black");
    localStorage.setItem("them", "black");
  } else {
    body.classList.remove("black");
    body.classList.add("light");
    localStorage.setItem("them", "light");
  }
});

