// ! задача 1

//* Запропонуйте користувачу ввести число за допомогою prompt().
//* Збережіть введене значення у змінну number.
//* Перевірте, чи дорівнює змінна number числу 10:
//* Якщо так - виведіть повідомлення 'Вірно' у alert().
//* Якщо ні - виведіть 'Невірно'.
//* Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
//* перетворіть значення на число за допомогою Number().

// function checkNumber() {
//     const number = Number(prompt("Введіть число:"));
//     if (number === 10) {
//         alert("Вірно!");
//     } else {
//         alert("Невірно!");
//     }
// }
// checkNumber();
// const answer = confirm("Alex?");
// console.log("answer:", answer);

// ! задача 2
//* У змінній min лежить випадкове число від 0 до 59.
//* Визначте, в яку чверть години потрапляє
//* це число (у першу, другу, третю чи четверту).
//* Виведіть в alert відповідне повідомлення, наприклад:
//* "10 входить в першу чверть"

// function checkOclock() {
// const min = Math.floor(Math.random() * (59 - 0) + 0);
//     const min = Number(prompt("Введіть число від 0 до 59:"));
//     console.log(min);
//     if (min <= 15) {
//         alert("${min} входить в першу чверть");
//     } else if (min >= 0 && min <= 30) {
//         alert("${min} входить в другу чверть");
//     } else if (min <= 45) {
//         alert("${min} входить в третю чверть");
//     } else {
//         alert("${min} входить в четверю чверть");
//     }
// }
// checkOclock();

// ! задача 3
//*  Змінна num може набувати 4 значення: '1', '2', '3' або '4'
//*  (запитуй це значення у користувача через prompt).
//*  Якщо вона має значення '1', то у змінну result запишіть 'зима',
//*  якщо має значення '2' - 'весна' і так далі.
//*  Розв'яжіть завдання через switch-case.
//*  Не забудьте про дефолтне значення, на випадок, якщо користувач
//*  введе в prompt щось інше. В такому випадку result має набувати значення:
//*  "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
//*  Значення змінної result виведіть в консоль.
// function checkSeason() {
//     const seasonNum = Number(prompt("Введіть число від від 1 до 4:"));
//     let result;
//     switch (seasonNum) {
//         case 1:
//             result = "Зима";
//             break;
//         case 2:
//             result = "Весна";
//             break;
//         case 3:
//             result = "Літо";
//             break;
//         case 4:
//             result = "Осінь";
//             break;
//         default:
//             result = "число має бути 1 - 4";
//     }
//     console.log(result);
// }
// checkSeason();
// ! задача 4
//* Отримуйте від користувача число (кількість хвилин) через prompt
//* і виводьте у консоль рядок у форматі годин та хвилин.
//* Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
//* Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const totalMinutes = Number(prompt("Введіть кількість хвилин:"));

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// const formattedHours = String(hours).padStart(2, "0");
// const formattedMinutes = String(minutes).padStart(2, "0");

// console.log(`${formattedHours}:${formattedMinutes}`);

// ! задача 5

//* Напишіть код, який запитуватиме у користувача
//* логін за допомогою prompt і виводить результат в консоль браузера

//* Після цього додайте перевірку введеного користувачем значення:
//* Якщо відвідувач вводить "Адмін",
//* то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
//* Якщо нічого не ввели або натиснули Cancel,
//* Вивести в alert строку "Скасовано"
//* В іншому випадку вивести в alert рядок "Я вас не знаю"

//* Пароль перевіряти так:
//* Якщо введено пароль "Я головний",
//* то вивести в alert рядок "Добрий день!",
//* в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("Введіть, будь ласка, логін:");
// console.log(login);
// if (login === "Адмін") {
//     const password = prompt("Введіть, будь ласка, пароль:");
//     if (password === null || password === "") {
//         alert("Скасовано");
//     } else if (password === "я головний") {
//         alert("Добрий день!");
//     } else {
//         alert("Невірний пароль!");
//     }
// } else if (login === null || login === "") {
//     alert("Скасовано");
// } else {
//     alert("Я Вас не знаю");
// }

// ! задача 6

//* Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let count = 0;
// while (count <= 20) {
//     console.log(count);
//     count += 1;
// }

// ! задача 7

//* Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
//* мінімальне і максимальне число відповідно.
//* Напишіть цикл всередині функції, який виводить у консоль
//* всі числа від max до min за спаданням.
//* Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
//* і поверніть її з функції.
// function getNumbers() {
//     const min = Number(prompt("Введіть число №1 (мінімальне):"));
//     const max = Number(prompt("Введіть число №2 (максимальне):"));
//     let sum = 0;

//     for (let i = min; i <= max; i++) {
//         console.log(i);
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// const result = getNumbers();
// console.log("Сума парних чисел:", result);

// ! задача 8

//* Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
//* Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
//* повертати з функції рядок - 'Not a number!'.
// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
//         return "Not a number";
//     }
//     if (a < b) {
//         return a;
//     } else if (b < a) {
//         return b;
//     } else {
//         return a;
//     }
// }
// console.log(min(5, 89));
// console.log(min(565565, 89));
// console.log(min("fsdfdfdfds", 89));
// ! задача 9

//* Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
//* якщо параметр age більше чи дорівнює 18.
//* В іншому випадку вона запитує підтвердження через confirm
//* і повертає його результат (true/false).

// function isAdult() {
//     const age = Number(prompt("Введіть свій вік:"));
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm("Ви точно маєте 18?");
//     }
// }
// const result = isAdult();
// console.log("Результат перевірки:", result);
// ! задача 10

//* Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
//* Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
//* якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
//* якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
// function fizzBuzz() {
//     const num = Number(prompt("Введіть число:"));
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         } else if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();
