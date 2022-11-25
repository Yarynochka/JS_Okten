// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a ='Hello';
let b = 'owu';
let c = 'com';
let d = 'ua';

let e= 1;
let f = 10;
let g = -999;
const PI = 3.14;
let j = 2.7;
let k = 16;

let l = 9>10;
let m = 10>9;

console.log(a,b,c,d,e,f,g,PI,j,k,l,m);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName='Lupiy';
let middleName ='Yaryna';
let lastName = 'Andriivna';

let person =`${firstName} ${middleName} ${lastName}`;
console.log(person);



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a1 = 100;
console.log(typeof a1);
let b2 = '100';
console.log(b2);
let c3 = true;
console.log(typeof c3);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter name','');
console.log(name);
let secondName= prompt('Enter your second name','');
let age=prompt('Enter your age','');

let fullInf= `${name} ${secondName} age:${age}`;
console.log(fullInf);