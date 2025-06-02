// Practical task

// 1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// 	Приклад роботи:
// upperCase('regexp');
// upperCase('RegExp');
// String's not starts with uppercase character 
// String's starts with uppercase character

// function upperCase(str) {
//     if (!str || typeof str !== 'string') {
//         return "Invalid input!";
//     }

//     if (str.charAt(0) === str.charAt(0).toUpperCase()) {
//         return "String's starts with uppercase character";
//     } else {
//         return "String's not starts with uppercase character";
//     }
// }
// console.log(upperCase('regexp'));
// console.log(upperCase('RegExp'));


// function upperCase (str) {
//     if (!str || typeof str !== 'string') return 'Invalid input!';
//     if (/^[A-Z]/.test(str)) {
//         return 'String starts with uppercase character';
//     } else {
//         return "String's not starts with uppercase character";
//     }
// }

// console.log(upperCase('regexp'));
// console.log(upperCase('RegExp'));

// 2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
// 	Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

// function checkEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }
// console.log(checkEmail("Qmail2@gmail.com"));
// console.log(checkEmail("wrong-email.com"));

// 3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d. Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
// 	Приклад роботи:   
// Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]

// const str = "cdbBdbsbz";
// const regex = /d(b+)(d)/i;
// let result = str.match(regex);
// result =[result[0],result[1],result[2]]
// console.log(result)
// const matches = [...str.matchAll(regex)];

// const result = matches.map(m => [m[0], m[1], m[2]]).flat();

// console.log(result);



// 4. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// 	Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

// const str = "Java Script";
// const result = str.replace(/(\w+)\s+(\w+)/, "$2 , $1");

// console.log(result);




// 5. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
// function validateCardNumber(cardNumber) {
//     const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     return regex.test(cardNumber);
// }


// 6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// 	Вимоги:
//   Цифри (0-9).
//   Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
//   В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//    Символ “-” не може повторюватися.



// function validateEmail(email) {
//   const regex = /^[a-zA-Z0-9](?!.*--)[a-zA-Z0-9_-]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
//   return regex.test(email);
// }
// console.log(validateEmail('my_mail@gmail.com'));     
// console.log(validateEmail('#my_mail@gmail.com')); 
// console.log(validateEmail('my_ma--il@gmail.com'));     

// checkEmail('my_mail@gmail.com');
// Email is correct!
// checkEmail('#my_mail@gmail.com');
// Email is not correct!
// checkEmail('my_ma--il@gmail.com');
// Email is not correct!

// 7. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
// 	Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// 1.1, 3

// checkLogin('ee1*1ret3');
// false 
// 1, 1, 3

// function checkLogin(login) {
//   const validRegex = /^(?=.{2,10}$)(?!\d)[A-Za-z0-9.]+$/;
//   let isValid = validRegex.test(login);
//   const numberRegex = /\d+(\.\d+)?/g;
//   let numbers = login.match(numberRegex) || [];

//   console.log(isValid);
//   console.log(numbers.join(", "));
// }

// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');



