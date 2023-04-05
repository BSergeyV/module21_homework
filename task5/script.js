const input = document.querySelector('.input');
const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
  // Настраиваем наш запрос
  const options = {
    method: 'GET',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }

  }
  // Делаем запрос за данными
  fetch(' https://jsonplaceholder.typicode.com/users/3/todos', options)
    .then(response => response.json())
    .then(json => console.log(json))
});