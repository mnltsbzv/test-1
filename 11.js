function checkAge (age){
if (age >18){
return true;
} else {

return confirm ('Вам разрешено?')
}
}
let age = prompt ('Сколько вам лет?');
if (checkAge(age)) {
alert ('Доступ получен');
}
else {
alert ('Доступ закрыт');
}
