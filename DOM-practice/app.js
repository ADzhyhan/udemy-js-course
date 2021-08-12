//1 
// Зная структуру html, с помощью изученных методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы, кроме первого и последнего
// Для навигации по DOM использовать методы, которые возвращают только элементы 


//2 
// Дана разметка. 
// Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark

// Функция принимает только DOM объекты. Обязательно проверяйте это. 


//3
// Используя разметку из предыдущего задания.
// Получить список всех ссылок, которые не находятся внутри списка ul. 


//4
// Используя разметку из предыдущего задания.
// Найти элемент, который находится перед и после списка ul. 



//ANSWERS 


//----1---- 
// //1
// console.log(document.head); 
// //2
// console.log(document.body);
// //3 
// console.log(document.body.children); 
// //4 a 
// console.log(document.firstElementChild);
// console.log(document.firstElementChild.children); 
// //4 b 
// const div = document.body.firstElementChild;
// const arr = [...div.children].filter(p => p !== div.firstElementChild && p !== div.lastElementChild); 
// console.log(arr);  

//----2---- 
// const isParent = (parent, child) => {
//   return parent === child.closest('div')
// }

// console.log(isParent(document.body.children[0], document.querySelector('mark'))); 

//----3---- 
const filtered = [...document.links].filter((a) => !a.closest('ul')); 

console.log(filtered);