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
const btn = document.getElementById('btn-generate');
const ul = document.querySelector('ul'); 

btn.addEventListener('click', (e) => {
  const number = ul.children.length + 1; 
  const li = document.createElement('li'); 
  li.textContent = `Item ${number}`;
  ul.appendChild(li);
})