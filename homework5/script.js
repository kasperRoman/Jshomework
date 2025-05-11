// Practical task

// 1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад для об’єкта
// let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" 
//         };
// Результат має бути 3.
// propsCount(mentor);  // 3
			                     		
// function propsCount(currentObject){
//     let count = 0;
//     for (let key in currentObject){
//      count ++;
//     }
//     return count
// }
// let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development" ,
//         }
//         console.log(propsCount(mentor))


// -----------------------------------option2----------------------------------------------------

// let mentor = { 
//                 course: "JS fundamental", 
//                 duration: 3,
//                 direction: "web-development" ,
//             }

// let propsCount = (currentObject) => Object.keys(currentObject).length;

// console.log(propsCount(mentor))



// 2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.

// let mentor = { 
//                 course: "JS fundamental", 
//                 duration: 3,
//                 direction: "web-development" ,
//                 name:"Roman",
//                 age:29,
//             }

// function  showProps(obj) {
//     let props=[];
//     let values=[];
// for( let key in obj){
//     props.push(key);
//     values.push(obj[key])
// }
// console.log(props ,values)
// }
// showProps(mentor)
// -----------------------------------------------option2---------------------------

// function showProps(obj){
//     console.log(Object.keys(obj), Object.values(obj))
// }
// showProps(mentor);



// 3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить ім’я і прізвище особи. 
// 	Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). 
// 	В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
// 	Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.
// 	Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6

// class Person {
//     constructor(name,surname){
//         this.name = name;
//         this.surname =surname;
//     }
//     showFullName() {
//         console.log(`${this.name} ${this.surname}`)
//     }
// }

// class Student extends Person{
//     constructor(name,surname,year){
//         super(name,surname);
//         this.year =year;
//     }
//     showFullName(midleName){
//         console.log(`${this.surname} ${this.name} ${midleName} `)
//     };
//     showCourse(){
//         const currentYear = new Date().getFullYear();
//         let course =currentYear -this.year;
//         if(course<1) course=1;
//         if(course>6) course ="you are not a student"
//         console.log(course)
//     }
   
// }
// const person1 = new Person("Roman","Kaspryshyn");
// person1.showFullName();

// const student1 = new Student("Roman","Kaspryshyn",2010);
// student1.showFullName("Stepanovuch");
// student1.showCourse();



// 4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
//        2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
//        3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
// 	4) Вивести значення зарплати з новим experience.
// 	5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
// 	6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.


// class Worker{

//     #experience;

//     constructor(fullName,dayRate,workingDays){
//         this.fullName =fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         this.#experience = 1.2;
//     }
//     showSalary(){
//         let salary = this.dayRate * this.workingDays;
//         console.log(salary)
//     }
//     showSalaryWithExperience(){
//         return this.dayRate * this.workingDays * this.#experience;
       
//     }
//     get experience() {
//         return this.#experience;
//     }
//     set experience(value) {
//         if (value > 0) {
//             this.#experience = value;
//         } else {
//             console.log("Досвід має бути більше 0!");
//         }
//     }
// }

// const worker1 = new Worker("ivan ",1200,22);
// console.log(worker1)
// worker1.showSalary();
// console.log(worker1.showSalaryWithExperience())
// worker1.experience = 1.5;
// console.log(worker1.showSalaryWithExperience())



// const workers = [
//     new Worker("Іван Петренко", 1000, 22, 1.5),
//     new Worker("Марія Савченко", 1200, 18, 2.0),
//     new Worker("Олег Коваль", 950, 20, 1.8),
//     new Worker("Анна Лисенко", 1100, 21, 1.4)
// ];
// workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
// workers.forEach(worker => {
//     console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()} `);
// });



// 5. Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
// Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
// 	Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().
// 	 class GeometricFigure {
// 			getArea() {
// 	return 0;
// }
// toString() {
//      return Object.getPrototypeOf(this).constructor.name;
// }
//      }
// 		Your code . . . 
	
// 	const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
//     	console.log(handleFigures(figures));

// Приклад результату:
// 	Geometric figure: Triangle - area: 10
// Geometric figure: Square - area: 49
// Geometric figure: Circle - area: 78.53981633974483
// 137.53981633974485 // total area




// class GeometricFigure {
//     getArea() {
//         return 0; // Базовий метод, який буде перевизначений у дочірніх класах
//     }

//     toString() {
//         return Object.getPrototypeOf(this).constructor.name; // Повертає назву класу
//     }
// }

// // Клас Triangle
// class Triangle extends GeometricFigure {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }

//     getArea() {
//         return (this.base * this.height) / 2; // Формула для площі трикутника
//     }
// }

// // Клас Square
// class Square extends GeometricFigure {
//     constructor(side) {
//         super();
//         this.side = side;
//     }

//     getArea() {
//         return this.side ** 2; // Формула для площі квадрата
//     }
// }

// // Клас Circle
// class Circle extends GeometricFigure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius ** 2; // Формула для площі кола
//     }
// }

// // Функція для обробки фігур та розрахунку загальної площі
// function handleFigures(figure   s) {               
//     return figures.reduce((totalArea, figure) => {
//         if (figure instanceof GeometricFigure) {
//             const area = figure.getArea();
//             console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
//             return totalArea + area;
//         }
//         return totalArea;
//     }, 0);
// }

// // Створення масиву фігур
// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

// console.log(handleFigures(figures)); // Виведе загальну площу всіх фігур







