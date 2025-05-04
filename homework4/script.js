// Practical task

// 1. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
// function calcRectangleArea(width, height) {
//     if (typeof width !== "number" || typeof height !== "number" || isNaN(width) || isNaN(height)) {
//         throw new Error("Помилка: width і height повинні бути числовими значеннями!");
//     }
//     return width * height;
// }


// try {
//     let width = Number(prompt("Введіть ширину прямокутника:").trim());
//     let height = Number(prompt("Введіть висоту прямокутника:").trim());

//     let area = calcRectangleArea(width, height);
//     console.log("Площа прямокутника:", area);
// } catch (error) {
//     console.error(error.message);
// }



// 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.

// function checkAge() {
//     try {
//         let age = prompt("Введіть ваш вік:").trim();

//         if (age === "") {
//             throw new Error("The field is empty! Please enter your age.");
//         }

//         age = Number(age);

//         if (isNaN(age)) {
//             throw new Error("Invalid input! Age must be a number.");
//         }

//         if (age < 14) {
//             throw new Error("Access denied! You must be at least 14 years old.");
//         }

//         alert("Access granted! Enjoy the movie.");
//     } catch (error) {
//         alert(`Error: ${error.message}`);
//         console.error(`Error: ${error.name} - ${error.message}`);
//     }
// }

// checkAge();


// 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number
// Клас помилки
// class MonthException {
//     constructor(message) {
//       this.name = 'MonthException';
//       this.message = message;
//     }
//   }

//   function showMonthName(month) {
//     const months = [
//       'January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];
  
//     if (month < 1 || month > 12 || isNaN(month)) {
//       throw new MonthException('Incorrect month number');
//     }
  
//     return months[month - 1];
//   }
  
//   try {
//     console.log(showMonthName(5));  
//     console.log(showMonthName(14)); 
//   } catch (error) {
//     if (error instanceof MonthException) {
//       console.error(`${error.name}: ${error.message}`);
//     } else {
//       console.error("Unknown error:", error);
//     }
//   }
  





// 4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// 	Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// 	Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

// function showUser(id) {
//     if (id < 0) {
//       throw new Error(`ID must not be negative: ${id}`);
//     }
//     return { id: id };
//   }
  
 
//   function showUsers(ids) {
//     let validUsers = [];
  
//     for (let i = 0; i < ids.length; i++) {
//       try {
//         let user = showUser(ids[i]);
//         validUsers.push(user);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }
  
//     return validUsers;
//   }

//   console.log(showUsers([7, -12, 44, 22]));