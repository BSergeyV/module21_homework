// Получаем данные по ключу nameKey в localStorage
let nameKey = localStorage.getItem('nameKey');

if (localStorage.getItem('nameKey') === null) {
    nameKey = prompt ("Добро пожаловать! Назовите, пожалуйста, ваше имя");

    // Запишем имя в localStorage в виде простой строки
    localStorage.setItem('nameKey', nameKey);

    let entryTime = new Date();
    // Запишем время входа в localStorage в виде простой строки
    localStorage.setItem('entryTime', entryTime);
} else {
    // Получаем данные по ключу nameKey в localStorage
    nameKey = localStorage.getItem('nameKey');
    // Получаем данные по ключу entryTime в localStorage
    entryTime = localStorage.getItem('entryTime');

    alert ("Добрый день, " + nameKey + "! Давно не виделись. В последний раз вы были у нас " + entryTime);
  
    entryTime = new Date();
    // Запишем время входа в localStorage в виде простой строки
    localStorage.setItem('entryTime', entryTime);
}