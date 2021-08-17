//--Hometask #1-- 

//1
// По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки. 


//2
// При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.


//3 
// При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента. 


//4 
// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 



//ANSWERS 

//1
// const btn = document.getElementById('btn-msg'); 

// btn.addEventListener('click', function(e) {
//   alert(e.target.dataset.text)
// });


//2 
// const btn = document.getElementById('btn-msg'); 

// btn.addEventListener('mouseover', (e) => {
//   btn.classList.add('b-red');
// }); 

// btn.addEventListener('mouseout', (e) => {
//   btn.classList.remove('b-red');
// }); 


//3 
// const element = document.getElementById('tag');
// document.addEventListener('click', (e) => {
//   element.textContent = `Tag: ${e.target.nodeName}`;
// }); 


//4
// const btn = document.getElementById('btn-generate');
// const ul = document.querySelector('ul'); 

// btn.addEventListener('click', (e) => {
//   const number = ul.children.length + 1; 
//   const li = document.createElement('li'); 
//   li.textContent = `Item ${number}`;
//   ul.appendChild(li);
// }) 



//--Homework #2-- 

//Tasks 

//1 Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться. 

// const dropItems = document.querySelectorAll('.dropdown-item'); 
// let openedMenu = null; 

// const toggleMenu = (e) => {
//   const menu = e.currentTarget.querySelector('.dropdown-menu');

//   const isAdded = menu.classList.toggle('d-none'); 
//   if(openedMenu && openedMenu !== menu) {
//     openedMenu.classList.add('d-none');
//   }
//   if(!isAdded) {
//     openedMenu = menu;
//   }
// } 

// dropItems.forEach(item => {
//   item.addEventListener('click', toggleMenu);
// }) 



//--Homework #3-- 

//Tasks  

// 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно блока на который навели мышь.

// Вот массив (список) рандомных цветов

// ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

// 2. Возращаете фон обратно когда пользователь уводит мышку с блока.

// 3. Добавление фона из первой части задания сделать с задержкой в 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего. Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д. 


const setRandomColor = (el) => {
  const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  el.style.background = randomColor;
};

const resetColor = (el) => {
  el.style.background = '';
}; 

const hover = (e) => {
  let elements = [e.currentTarget]; 
  let currentEl = e.currentTarget; 

  while(currentEl) {
    elements = [...elements, ...currentEl.children]; 
    currentEl = currentEl.children[currentEl.children.length - 1];
  } 

  elements.forEach((el, index) => {
    setTimeout(setRandomColor, 200 * (index + 1), el);
  });
} 

const mouseLeave = (e) => {
  resetColor(e.currentTarget);
} 

document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', hover)); 
document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', mouseLeave));