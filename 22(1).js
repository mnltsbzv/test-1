function checkAge (age){
return (age >18) || confirm('Родители разрешили?');
}
 let age = prompt('Ваш возраст?');
if (checkAge(age)){
 alert('Доступ разрешен');
}
else {
alert('В доступе отказано');
}
