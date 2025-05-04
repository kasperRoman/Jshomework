// ­­­­­­­Practical task 3

// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. 
//  let arr = [2, 3, 4, 5];
//  let product =1;

// for(let i =0; i < arr.length ; i++){
//  product *= arr[i]
// }
// console.log(product)

// Також реалізуйте завдання через while.
// let arr = [2, 3, 4, 5];
// let product =1;
// let i = 0;


// while (i <arr.length){
//  product  *=arr[i]
//  i++;
// }
// console.log(product)

// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
// Sample Output: 
// "0 is even" 
// "1 is odd" 
// "2 is even" 
//  for (let i = 0; i <= 15; i++){
//     if (i %2 === 0){
//         console.log(i + " is even")
//     }else{
//         console.log(i + " is odd")
//     }
//  }


// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

// Sample Output:
// randArray(5);  // [399,310,232,379,40]


// function randArray(k) {
//     let arr = [];
//     for (let i = 0; i < k; i++) {

//         let randomNUm = Math.floor(Math.random() * 500) + 1;
//         arr.push(randomNUm)
//     }
//     return arr;
// }

// let array = randArray(20);
// console.log(array);


// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

// Sample Output:
// raiseToDegree(3, 4);  // 81

//  function raiseToDegree(a,b){
//     if (isNaN(a) || isNaN(b)){
//         return " Помилка: потрібно ввести ціле число!"
//     }else{
//         return a**b
//     }

//  }
//  let a = parseInt(prompt("Введіть ціле число a:"));
//  let b = parseInt(prompt("Введіть ціле число b:"));
 
//  let result = raiseToDegree(a, b);
//  console.log("Результат:", result);


// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4

// function findMin(...args) {
//     if (args.length === 0) {
//       return "Помилка: не передано жодного числа.";
//     }
  
//     return Math.min(...args);
//   }
//   console.log(findMin(12, 14, 4, -4, 0.2))


// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

// function findUnique(arr) {
//     return new Set(arr).size === arr.length;
//   }

//   console.log(findUnique([1, 2, 3, 5, 3]));   
//   console.log(findUnique([1, 2, 3, 5, 11]));  



// 7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

// function getLastElements(arr, count = 1) {
//     if (!Array.isArray(arr)) {
//       return "Помилка: перший аргумент має бути масивом.";
//     }
//     if (count <= 0) return [];
//     if (count >= arr.length) return arr;
  
//     return arr.slice(-count);
//   }
  
  
//   console.log(getLastElements([1, 2, 3, 4, 5]));       
//   console.log(getLastElements([1, 2, 3, 4, 5], 2));    
//   console.log(getLastElements([1, 2, 3, 4, 5], 10));  


// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

// Input string: 'i love java script'
// Output string: 'I Love Java Script'
// function capitalizeWords(str) {
//     return str
//       .split(" ")
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   }
//   let input = 'i love java script';
//   let result = capitalizeWords(input);
//   console.log(result);  
