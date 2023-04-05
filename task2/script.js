const json = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;

//Создаем объект из строки Json
const obj = JSON.parse(json);

//Возвращаем строку Json
const newJson = JSON.stringify(obj);
console.log(newJson);