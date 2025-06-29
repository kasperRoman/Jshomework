// Practical task

// 1. 
// Вихідний код:
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [/* Ваш код */] = arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]
// Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x,y,z,n] = arr;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(n);



// 2. 
// Вихідний код:
// let data = {
//    names: ["Sam", "Tom", "Ray", "Bob"],
//    ages: [20, 24, 22, 26],
// };
// let /* Ваш код */ = data;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26
// 	Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.

// let data = {
//    names: ["Sam", "Tom", "Ray", "Bob"],
//    ages: [20, 24, 22, 26],
// };
// let {names:[name1, name2, name3, name4], ages:[age1,age2,age3,age4] }= data;
// console.log(name2); 
// console.log(age2); 
// console.log(name4); 
// console.log(age4); 



// 3. Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// 	Якщо параметри типу Number відсутні, повертає число 0.
// function mul() {
//    // Ваш код
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0
// Не можна використовувати властивість arguments, але в функцію mul() можна додати один параметр.


// function mul(...args){
//     let result = 1;
//     let hasNumber =false

//     for(let arg of args){
//         if(typeof arg === 'number'){
//         result  *= arg;
//         hasNumber =true
//         }
//     }
//     return hasNumber ? result :0;

// }
// console.log(mul(1, "str", 2, 3, true));
// console.log(mul(null, "str", false, true));

//  /            version2     
// function mul(...args){
//     let numbers =args.filter(arg=>typeof(arg) === 'number');
//     return numbers.length ? numbers.reduce((a,b)=>a*b ,1) : 0;
// }
// console.log(mul(1, "str", 2, 3, true));
// console.log(mul(null, "str", false, true));

// 4. 
// Вихідний код:
// let server = {
//    data: 0,
//    convertToString: function (callback) {
//       callback((function () {
//          return this.data + "";
//       }).bind(this));
//    }
// };
// let client = {
//    server: server,
//    result: "",
//    calc: function (data) {
//       this.server.data = data;
//       this.server.convertToString(this.notification());
//    },
//    notification: function () {
//       return (function (callback) {
//          this.result = callback();
//       }).bind(this);
//    }
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"
// Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().

// let server = {
//    data: 0,
//    convertToString: function (callback) {
//       callback(() => this.data + "");
//    }
// };

// let client = {
//    server: server,
//    result: "",
//    calc: function (data) {
//       this.server.data = data;
//       this.server.convertToString(this.notification());
//    },
//    notification: function () {
//       return (callback) => {
//          this.result = callback();
//       };
//    }
// };

// client.calc(123);
// console.log(client.result); 
// console.log(typeof client.result);




// 5. Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
// Приклади використання функції:
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// 	console.log(map.get(2)); // "span"


// function mapBuilder(keysArray, valuesArray) {
//   const map = new Map();
//   for (let i = 0; i < keysArray.length; i++) {
//     map.set(keysArray[i], valuesArray[i]);
//   }
//   return map;
// }
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// 	console.log(map.get(2)); // "span"