const apiUrl = 'https://jsonplaceholder.typicode.com'; 
const usersListEl = document.querySelector('.users-list');
const userInfoEl = document.querySelector('.user-info');

usersListEl.addEventListener('click', onUserClickHandler)

function onUserClickHandler(e) {
  e.preventDefault();

  if(e.target.dataset.userId) {
    getUserInfoHTTP(e.target.dataset.userId, onGetUserInfoCallback);
  }
}

function getUsersHTTP(cb) {
  const xhr = new XMLHttpRequest(); 

  xhr.open('get', `${apiUrl}/users`);
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      console.error('Error', xhr.status);
    }

    const res = JSON.parse(xhr.responseText); 

    cb(res);
  });

  xhr.send();
}

function getUserInfoHTTP(id, cb) {
  const xhr = new XMLHttpRequest(); 

  xhr.open('get', `${apiUrl}/users/${id}`);
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      console.error('Error', xhr.status);
    }

    const res = JSON.parse(xhr.responseText); 

    cb(res);
  });

  xhr.send();
}

function onGetUserInfoCallback(user) {
  if(!user.id) {
    console.log('User not found'); 
    return;
  }

  renderUserInfo(user);
}

function onGetUsersCallback(users) {
  if (!users.length) {
    return;
  } 

  renderUsersList(users);
}

function renderUserInfo(user) {
  userInfoEl.innerHTML = ''; 

  const template = userInfoTemplate(user); 

  userInfoEl.insertAdjacentHTML('afterbegin', template);
}

function renderUsersList(users) {
  const fragment = users.reduce((acc, user) => acc + usersListItemTemplate(user), '');

  usersListEl.insertAdjacentHTML('afterbegin', fragment);
}

function usersListItemTemplate(user) {
  return `
    <a href="#" class="list-group-item list-group-item-action" data-user-id="${user.id}">
      ${user.name}
    </a>
  `;
}

function userInfoTemplate(user) {
  return `
  <div class="card border-dark mb-3">
  <div class="card-header">${user.name}</div>
  <div class="card-body text-dark">
    <h5 class="card-title">${user.email}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Nickname:</b> ${user.username}</li>
      <li class="list-group-item"><b>Website:</b> ${user.website}</li>
      <li class="list-group-item"><b>Company:</b> ${user.company.name}</li>
      <li class="list-group-item"><b>City:</b> ${user.address.city}</li>
    </ul>
  </div>
  <div class="card-footer bg-transparent border-dark">Phone: ${user.phone}</div>
</div>
  `
}

getUsersHTTP(onGetUsersCallback);