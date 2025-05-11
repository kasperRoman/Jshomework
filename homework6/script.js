// Practical task
// 1. На HTML-сторінці є елемент div:
//     <body>	
// 	<div id="test">First</div>
//   </body>	
// Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.

// const test =document.getElementById("test");
// test.textContent ="Last";

// document.querySelector("#test").textContent = "Last";


// 2. На сторінці є елемент зображення:
//      <body>
// 		   <img class="image" src="dog.jpg">
//      </body>
// Потрібно змінити зображення dog.jpg на cat.jpg.
// Виведіть в модальному вікні вміст тегу img з новим зображенням.

// const img = document.querySelector(".image");
// img.src = "cat.jpg";
// alert(img.outerHTML)

// 3. 
//        <body>
// 	<h2>Article header</h2>      
//       <div id="text">
//         <p>First paragraph</p>
//         <p>Second paragraph</p>
//         <p>Third paragraph</p>
//       </div>
// 	<p>Another text</p>
//     </body>
// На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод document.querySelectorAll). І вивести їх вміст із вказанням номеру абзацу в такому форматі:
// Selector text 0: First paragraph
// Selector text 1: Second paragraph
// Selector text 2: Third paragraph

// const allElements = document.querySelectorAll("#text *");
// allElements.forEach((element , index)=>console.log(`Selector text ${index}: ${element.textContent}`));


// 4. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
// 	1) першого елемента списку
// 	2) останнього елемента списку
// 	3) другого елемента списку
// 	4) четвертого елемента списку
// 	5) третього елемента списку
// Зробіть завдання 2 різними способами.	
// Приклад:
//     • 1
//     • 2
//     • 3
//     • 4
//     • 5
// Результат виводу: 1, 5, 2, 4, 3

// const list = document.getElementById("list");
// const listItems = list.children;
// Array.from(listItems).forEach(element => console.log(element.textContent));

// alert(listItems[0].textContent);
// alert(listItems[4].textContent);
// alert(listItems[1].textContent);
// alert(listItems[3].textContent);
// alert(listItems[2].textContent);

// ----------------------------------деструктиризація----------------------------
// const listItems = document.querySelectorAll("#list li");
// const [first, second, third, fourth, fifth] = listItems;

// alert(first.textContent);  
// alert(fifth.textContent);  
// alert(second.textContent); 
// alert(fourth.textContent); 
// alert(third.textContent);  



// 5. Для сторінки
// 		  <body>
// 		       <h1>I'am a big header!!!</h1>
//         <div id="myDiv">
//             <p>First paragraph</p>
//             <p>Second paragraph</p>
//             <p>Third paragraph</p>
//             <p>Fourth paragraph</p>
//         </div>
//         <ul id="myList">
//             <li>Make</li>
//             <li>me</li>
//             <li>horizontal!</li>
//         </ul>
//         <span>Make me invisible, please!</span>
// 	    </body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче:

// const h1 = document.querySelector("h1")
// h1.style.background ='green';
// const paragraphs = document.querySelectorAll("#myDiv p");
// paragraphs[1].style.color ='red';
// paragraphs[2].style.textDecoration = "underline";
// paragraphs[3].style.fontStyle = "italic";
// const list = document.querySelector("#myList");
// list.style.cssText ="display: flex; list-style:none;"
// const span =document.querySelector("span");
// span.style.display ="none";


// 6. Задано HTML-сторінку:
//     <body>
// <input type="text" id="input1" value="Text1">
// <input type="text" id="input2" value="Text2">
//   </body>
//     1) Користувач почергово вводить 2 повідомлення (використати prompt()). 1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.
//     2) Поміняти значення 1-го і 2-го інпутів місцями.

// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");
// const message1 = prompt("Введіть перше повідомлення:");
// const message2 = prompt("Введіть друге повідомлення:");
// input1.value = message1;
// input2.value = message2;

// const  box = input1.value;
// input1.value = input2.value;
// input2.value = box;



// 7. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.

// 		<body>
// 		  <main class="mainClass check item"> 	
// 		        <div id="myDiv">
//            <p>First paragraph</p>           
//          </div>
//        </main> 
// 	    </body>

const main = document.createElement("main");
main.className = "mainClass check item";
const div = document.createElement("div");
div.id = "myDiv";
const paragraph = document.createElement("p");
paragraph.textContent = "First paragraph";
div.appendChild(paragraph);
main.appendChild(div);
document.body.appendChild(main);