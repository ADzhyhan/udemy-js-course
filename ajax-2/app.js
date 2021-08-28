// const apiUrl = 'https://jsonplaceholder.typicode.com';

// //DOM elements
// const form = document.forms['new-user-form'];
// const usersList = document.querySelector('.users-list') 

// //Events 
// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();

//   const inputs = [...form.elements].filter(
//     (el) => el.nodeName !== "BUTTON"
//   ); 

//   const objValues = inputs.reduce((acc, input) => {
//     acc[input.name] = input.value;
//     return acc;
//   }, {}); 

//   addNewUserHTTP(objValues, onAddUserCallback);
// } 

// function addNewUserHTTP(data, cb) {
//   const xhr = new XMLHttpRequest(); 

//   xhr.open('POST', `${apiUrl}/users`); 
//   xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); 

//   xhr.addEventListener('load', () => {
//     const response = JSON.parse(xhr.responseText); 
//     cb(response); 
//   }); 


//   xhr.addEventListener('error', () => {
//     console.log('error'); 
//   }); 

//   xhr.send(JSON.stringify(data));
// } 

// function onAddUserCallback(newUser) {
//   if(!newUser.id) {
//     return;
//   } 

//   renderUserToList(newUser); 
// } 

// function renderUserToList(user) {
//   const template = renderUserTemplate(user); 
//   usersList.insertAdjacentHTML('beforeend', template); 
// }

// function renderUserTemplate(user) {
//   return `
//     <div class="list-group-item list-group-item-action">
//       <div class="d-flex w-100 justify-content-between">
//         <h5 class="mb-1">${user.name || ""}</h5>
//         <small>${user.phone || ""}</small>
//       </div>
//         <p class="mb-1">${user.email || ""}</p>
//         <small>${user.website || ""}</small>
//     </div>
//   `
// }


//2 variant 
const apiUrl = 'https://jsonplaceholder.typicode.com' 

//DOMelements 
const form = document.forms['user-form']; 
const container = document.querySelector('.container');
const nameInput = form.elements['name'];
const emailInput = form.elements['email'];
const phoneInput = form.elements['phone'];
const siteInput = form.elements['website'];

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const userObj = createUserData(); 

  if (
    !userObj.name ||
    !userObj.email || 
    !userObj.phone || 
    !userObj.website
  ) {
    alert('Fields shouldn`t be empty!');
    return;
  }

  sendUser(userObj, (response) => {
    const fragment = createFragment(response); 
    container.insertAdjacentHTML('beforeend', fragment);
  })
})

const sendUser = (dataUser, cb) => {
  const xhr = new XMLHttpRequest(); 
  xhr.open('POST', `${apiUrl}/users`); 
  xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.responseText); 
    cb(response);
  }); 

  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8'); 

  xhr.addEventListener('error', () => {
    console.log('error');
  }); 

  xhr.send(JSON.stringify(dataUser)); 
}

const createFragment = (user) => {
  // const card = document.createElement('div');
  // card.classList.add('card');
  
  // const cardBody = document.createElement('div'); 
  // cardBody.classList.add('card-body');
  
  // const name = document.createElement('h5'); 
  // name.classList.add('card-title'); 
  // name.textContent = user.name; 
  
  // const email = document.createElement('p'); 
  // email.classList.add('card-text'); 
  // email.textContent = user.email; 
  
  // const phone = document.createElement('p'); 
  // phone.classList.add('card-text'); 
  // phone.textContent = user.phone; 
  
  // const site = document.createElement('p'); 
  // site.classList.add('card-text'); 
  // site.textContent = user.website;

  // cardBody.appendChild(name);
  // cardBody.appendChild(email);
  // cardBody.appendChild(phone);
  // cardBody.appendChild(site); 
  // card.appendChild(cardBody);

  // return card; 
  return `
    <div class="card mt-5">
      <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text">${user.email}</p>
        <p class="card-text">${user.phone}</p>
        <p class="card-text">${user.website}</p>
      </div>
    </div>
  `;
  
}

const createUserData = () => {
  const objUser = {
    name: nameInput.value, 
    email: emailInput.value, 
    phone: phoneInput.value, 
    website: siteInput.value,
  }; 

  return objUser;
}