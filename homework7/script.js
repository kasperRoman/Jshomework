// 1. За допомогою методів об’єкта window створити:
// 	1) нове вікно розміром 300х300 пікселів.
// 	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
// 	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
// 	4) із затримкою 2 сек закрийте вікно.
// const newWindow = window.open("", "", "width=300,height=300");


// setTimeout(() => {
//   newWindow.resizeTo(500, 500);
// }, 2000);


// setTimeout(() => {
//   newWindow.moveTo(200, 200);
// }, 4000);

// setTimeout(() => {
//   newWindow.close();
// }, 6000);


// 2. Для заданої HTML-сторінки:

// <p id ='text'>I learning JavaScript events!</p> 
// <div>
// 	<button . . . . . >Change style!</button>
// </div>

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS".

// function changeCSS() {
//   const paragraph = document.getElementById("text");
//   paragraph.style.color = "orange";
//   paragraph.style.fontSize = "20px";
//   paragraph.style.fontFamily = "Comic Sans MS";
// }


// 3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
// 	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
// 	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
// 	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
// 	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.

//  const body = document.body;
    
//     document.getElementById("btn1").addEventListener("click", function () {
//       body.style.backgroundColor = "blue";
//     });

    
//     document.getElementById("btn2").addEventListener("dblclick", function () {
//       body.style.backgroundColor = "pink";
//     });

    
//     const btn3 = document.getElementById("btn3");
//     btn3.addEventListener("mousedown", function () {
//       body.style.backgroundColor = "brown";
//     });
//     btn3.addEventListener("mouseup", function () {
//       body.style.backgroundColor = "white";
//     });

//     const link = document.getElementById("link");
//     link.addEventListener("mouseover", function () {
//       body.style.backgroundColor = "yellow";
//     });
//     link.addEventListener("mouseout", function () {
//       body.style.backgroundColor = "white";
//     });


// 4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.

    // function removeSelected() {
    //   const select = document.getElementById("mySelect");
    //   const selectedIndex = select.selectedIndex;

    //   if (selectedIndex !== -1) {
    //     select.remove(selectedIndex);
    //   } else {
    //     alert("Немає обраного елемента для видалення!");
    //   }
    // }