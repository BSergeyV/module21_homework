let btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    // Получаем данные введенные в number__input
    let number__input = document.querySelector('.number__input').value;

    let myPromise = new Promise((resolve, reject) => {
        if (1 <= number__input && number__input <= 10) {
          resolve("Номер страницы внходит в диапазон от 1 до 10");
        } else {
          reject("Номер страницы вне диапазона от 1 до 10");
        }
      });
    

    // Получаем данные введенные в number__input
    let limit__input = document.querySelector('.limit__input').value;
    console.log(limit__input);

    new Promise((resolve, reject) => {
        if (1 <= limit__input && limit__input <= 10) {
          resolve("Лимит внходит в диапазон от 1 до 10");
        } else {
          reject("Лимит вне вне диапазона от 1 до 10");
        }
      });
    
    // Выполняем promise
    myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
  });