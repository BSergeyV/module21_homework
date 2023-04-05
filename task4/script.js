let number = Math.random() * 100;
number = Math.round(number);

// Создаем promise
let myPromise = new Promise ((resolve, reject) => {
    if (number % 2) {
    setTimeout(() => { reject("Завершено с ошибкой. Сгенерированное число — " + number) }, 3000);
    } else {
    resolve("Завершено успешно. Сгенерированное число — " + number);
    }
})

// Выполняем promise
myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})