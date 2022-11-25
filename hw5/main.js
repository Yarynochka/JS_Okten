// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle(a,b) {
    return a*b;
}
console.log(squareRectangle(5,7));
// срілочна
let square=(d,e) => d * e;
console.log(square(5,7));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let p=3.14;
function squareCircle(p,r) {
    return p*r^2;
}
console.log(squareCircle(p,6));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(p,R,H) {
    return 2*p*R*H*(R+H);
}
console.log(squareCylinder(p,4,10));

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function aarPrint(users) {
    for (const user of users) {
        console.log(user);
    }
}
aarPrint(users);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(tag,text) {
    document.write(`<${tag}>${text}</${tag}>`)
}
paragraph('p','Завдання:створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulLi(text) {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    </ul>`)
}
ulLi('item');


// -21:24 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// -  48 хв створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function li(items) {
    document.write(`
    <ul>
    <li>${items}</li>
    <li>${items}</li>
    <li>${items}</li>
</ul> 
    `)
}
li('some text');

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let newUsers = [
    {id:0,name: 'kolya', age: 29},
    {id:1,name: 'olya', age: 28},
    {id:2,name: 'vasya', age: 31},
    {id:3,name: 'petya', age: 30},
];
function newUsersList(arr) {
    for (const arrElement of arr) {
        document.write(`<div> <b>id:</b> ${arrElement.id} <b>name:</b> ${arrElement.name} <b>age</b>:${arrElement.age}</div>`)
    }
}
newUsersList(newUsers);


// - створити функцію яка повертає найменьше число з масиву

const arr = [0, 12, -5, -7];
function max(array) {
    let min = array[0];
    for (const minElement of array) {
        if (minElement < min) {
            min = minElement
        }
    }
    return min;
}

console.log(max(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sum(array) {
    let sum=0;
    for (const arrayElement of array) {
        sum+=arrayElement;
    }
    return sum;
}
console.log(sum(arr));
