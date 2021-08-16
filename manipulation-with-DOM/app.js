//--First hometask--

//----1----
// Найти параграф и получить его текстовое содержимое (только текст!) 


//----2---- 
// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)


//----3---- 
// Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"] 


//----4---- 
// В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:

// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text- 



//ANSWERS 


//1
// const p = document.querySelector('p'); 
// console.log(p.textContent);  


//2 
// const foo = (node) => {
//   if(!(node instanceof Element)) return 0; 
//   return {
//     nodeType: node.nodeType,
//     tag: node.tagName, 
//     childs: node.childNodes.length,
//   };
// }; 

// const p = document.querySelector('p');
// console.log(foo(p)); 


//3 
// const ul = document.querySelector('ul');

// const getLinksFromUl = (ul) => {
//   if (!(ul instanceof HTMLElement)) return 0;

//   const [...links] = ul.querySelectorAll('a') || [];

//   return links.map(a => a.textContent)
// } 

// console.log(getLinksFromUl(ul)); 


//4 
// const [...pchildNodes] = document.querySelector('p').childNodes; 

// pchildNodes.forEach(child => {
//   if(child.nodeType === 3) {
//     child.textContent = '-text';
//   };
// }); 


//--Hometask #2-- 

//1
// Найти в коде список ul и добавить класс “list” 


//2
// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link 


//3
// На li через один (начиная с самого первого) установить класс “item” 


//4
// На все ссылки в примере установить класс “custom-link” 


//ANSWERS 


//1 
// const ul = document.querySelector('ul'); 
// ul.classList.add('list');  


//2
// const element = document.querySelector('ul ~ a'); 
// element.id = 'link';
// console.log(element); 


//3 
// const [...li] = document.querySelectorAll('li');

// li.forEach((li, i)=> {
//   if(!(i % 2)) {
//     li.classList.add('item');
//   }
// }) 

//4 
// const [...links] = document.links; 
// links.forEach(link => link.classList.add('custom-link')); 



//--Hometask #3-- 

//1 
// Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке. 


//2
// В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).


//3
// В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 


//4 
// Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green 


//5
// Отсортировать li внутри списка в обратном порядке (по тексту внутри) 


//ANSWERS 


//1 
// const ulList = document.querySelector('ul');
// const countLi = ulList.children.length; 
// const newLi = 3; 

// for (let i = 0; i < newLi; i++) {
//   let li = document.createElement('li'); 
//   li.classList.add('new-item'); 
//   li.textContent = `item ${countLi + i + 1}`;
//   ulList.appendChild(li);
// } 
  

//2
// const [...links] = document.querySelectorAll('ul a');
// links.forEach(link => {
//   link.insertAdjacentHTML('beforeend', '<strong>Strong</strong>');
// }); 


//3
const img = document.createElement('img');
img.setAttribute('src', 'https://static.wikia.nocookie.net/spongebob/images/3/3e/SpongeBob_Star_show.jpeg/revision/latest?cb=20210712133010');
img.setAttribute('alt', 'spongebob'); 
img.setAttribute('width', '150');
img.setAttribute('height', '200')
document.body.insertAdjacentElement('afterbegin', img)