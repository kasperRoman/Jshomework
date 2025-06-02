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
// -------------------------------option 2----------

// function changeCSS(){
//     const paragraph = document.getElementById("text");
//     paragraph.classList.toggle('changeParagraph');
//     const button = document.querySelector('button');
//     if(button.textContent === 'Change style!'){
//         button.textContent = 'no style'
//     }else{
//         button.textContent ="Change style!"
//     }
    

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

//     5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
// const button = document.querySelector('button');
// const messageList = document.getElementById('messageList');

// function addmessage (text){
//     const li = document.createElement('li');
//     li.textContent = text;
//     messageList.appendChild(li)
// }

// button.addEventListener('click', ()=>addmessage('I was pressed'));
// button.addEventListener('mouseover', ()=>addmessage('Mouse on me!'));
// button.addEventListener('mouseout', ()=>addmessage('Mouse is not on me!'));


// 6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.


//   function updateWindowSize() {
//             const width = window.innerWidth;
//             const height = window.innerHeight;
//             document.getElementById("windowSize").textContent = `Ширина: ${width}px, Висота: ${height}px`;
//         }

//         window.addEventListener("resize", updateWindowSize);
//         updateWindowSize();



// 7*. На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.


    const citiesByCountry = {
      ukraine: ["Київ", "Львів", "Харків"],
      germany: ["Берлін", "Мюнхен", "Гамбург"],
      usa: ["Нью-Йорк", "Лос-Анджелес", "Чикаго"]
    };

    const countrySelect = document.getElementById("country");
    const citySelect = document.getElementById("city");
    const resultDiv = document.getElementById("result");

    countrySelect.addEventListener("change", function () {
      const selectedCountry = this.value;
      citySelect.innerHTML = "";

      if (selectedCountry && citiesByCountry[selectedCountry]) {
        citiesByCountry[selectedCountry].forEach(city => {
          const option = document.createElement("option");
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
        });
      } else {
        const option = document.createElement("option");
        option.textContent = "-- Спочатку оберіть країну --";
        citySelect.appendChild(option);
      }

      // Очистити вивід
      resultDiv.textContent = "";
    });

    citySelect.addEventListener("change", function () {
      const countryText = countrySelect.options[countrySelect.selectedIndex].text;
      const cityText = citySelect.value;
      if (countryText && cityText) {
        resultDiv.textContent = `Ви обрали: ${countryText}, місто: ${cityText}`;
        
        
      }
    });



