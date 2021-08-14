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
const [...pchildNodes] = document.querySelector('p').childNodes; 

pchildNodes.forEach(child => {
  if(child.nodeType === 3) {
    child.textContent = '-text';
  };
}); 
