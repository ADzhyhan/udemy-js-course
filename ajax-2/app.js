const apiUrl = 'https://jsonplaceholder.typicode.com';

//DOM elements
const form = document.forms['new-user-form'];
const usersList = document.querySelector('.users-list') 

//Events 
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const inputs = [...form.elements].filter(
    (el) => el.nodeName !== "BUTTON"
  ); 

  const objValues = inputs.reduce((acc, input) => {
    acc[input.name] = input.value;
    return acc;
  }, {}); 

  addNewUserHTTP(objValues, onAddUserCallback);
} 

function addNewUserHTTP(data, cb) {
  const xhr = new XMLHttpRequest(); 

  xhr.open('POST', `${apiUrl}/users`); 
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); 

  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText); 
    cb(response); 
  }); 


  xhr.addEventListener('error', () => {
    console.log('error'); 
  }); 

  xhr.send(JSON.stringify(data));
} 

function onAddUserCallback(newUser) {
  if(!newUser.id) {
    return;
  } 

  renderUserToList(newUser); 
} 

function renderUserToList(user) {
  const template = renderUserTemplate(user); 
  usersList.insertAdjacentHTML('beforeend', template); 
}

function renderUserTemplate(user) {
  return `
    <div class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${user.name || ""}</h5>
        <small>${user.phone || ""}</small>
      </div>
        <p class="mb-1">${user.email || ""}</p>
        <small>${user.website || ""}</small>
    </div>
  `
}
