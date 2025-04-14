// task2
// const surname = "Kaspryshyn";
// console.log(surname);

// 3. a) оголосіть дві змінні;
//     b) запишіть у змінні будь-які значення;
//     c) виведіть на екран значення змінних;
//     d) скопіюйте значення однієї змінної в іншу;
//     e) виведіть на екран значення змінних.

// let name ;
// let surname;
// name = 'Roman' ;
// surname = 'Kaspryshyn';
// alert(name);
// alert(surname);

// name = surname;
// alert(name);
// alert(surname);

// 4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
	
// let object ={
//   String:'sdasd',
//   Number:5,
//   Boolean:true,
//   Undefined: undefined ,
//   Null:null
  

// };




// 5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.

// let isAdult = confirm('Are you an adult?');
// console.log(isAdult);



// 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
// 	- ваше ім’я
// 	- ваше прізвище
// 	- навчальна група
// 	- ваш рік народження.
// Присвойте змінним відповідні значення. 
// Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
// Визначте тип кожної змінної.
// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
	

// let name ;
// let surName ;
// let group ;
// let year ;
//  name = 'Roman';
//  surName ='Kaspryshyn';
//  group =2;
//  year = 1995;

// let married =true;
// console.log(typeof(name ));
// console.log(typeof(surName ));
// console.log(typeof(group ));
// console.log(typeof(year));
// console.log(typeof(married));

// console.log(year ,group , married , name , surName ,);

// let Null = null;
// let Undefined ;
// console.log(typeof (Null))
// console.log(typeof (Undefined))





// 7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
// let login = prompt('Write your login', '');
// let email = prompt('Write your email', '');
// let password = prompt('Write you password', '');

// alert(`Dear ${login}, your email is ${email}, your password is ${password}`);



// 8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
// let secondsInHour = 60 * 60;

// let secondsInDay = secondsInHour * 24;

// let secondsInMonth = secondsInDay * 30;

// console.log("Секунд у годині: " + secondsInHour);
// console.log("Секунд у добі: " + secondsInDay);
// console.log("Секунд у місяці: " + secondsInMonth);

let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30;

console.log('Кількість секунд в годині:', secondsInHour);
console.log('Кількість секунд в дні:', secondsInDay);
console.log('Кількість секунд в місяці:', secondsInMonth);