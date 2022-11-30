// - Знайти та вивести довижину настипних стрінгових значень
// let a='hello world';
// let b='lorem ipsum';
// let c='javascript is cool';
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);
// - Перевести до великого регістру наступні стрінгові значення
// let upperCase1=a.toUpperCase();
// let upperCase2=b.toUpperCase();
// let upperCase3=c.toUpperCase();
// console.log(upperCase1,upperCase2,upperCase3);

// - Перевести до нижнього регістру настипні стрінгові значення
// let d = 'HELLO WORLD';
// let e = 'LOREM IPSUM';
// let f = 'JAVASCRIPT IS COOL';
// let lowerCase1=d.toLowerCase();
// console.log(lowerCase1);
//
// let lowerCase2=e.toLowerCase();
// console.log(lowerCase2);
//
// let lowerCase3=f.toLowerCase();
// console.log(lowerCase3);



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str);
// console.log(str.length);
// let trim=str.trim();
// console.log(trim);
// console.log(trim.length);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr=str.split(' ');
// console.log(arr);



// let arr =  ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let string=arr.join(' ');
// console.log(string);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// const arr=[10,8,-7,55,987,-1011,0,1050,0];
// let string=arr.map(value=>value.toString());
// console.log(string);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// const sortNums=(array,direction)=>{
//     if(direction==='ascending'){
//         array.sort((a,b)=>a-b);
//     }
//     else if(direction==='descending'){
//         array.sort((a,b)=>b-a);
//     }
//     return array;
// }
// console.log(sortNums(nums,'descending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let sort =coursesAndDurationArray.sort((a,b)=> b.monthDuration-a.monthDuration);
// console.log(sort);
//
// let c=coursesAndDurationArray.filter((courses)=>courses.monthDuration>5);
// console.log(c);

//
// описати колоду карт

const suits = [
    {cardSuit: 'heart', color: 'red'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
]
const cardNames = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck=[];

for (const suit of suits) {
    for (const cardName of cardNames) {
        const card={
            cardSuit:suit.cardSuit,
            value: cardName,
            color:suit.color
        }
deck.push(card);
    }
}
console.log(deck);
console.log(deck.length);


// - знайти піковий туз
console.log(deck.filter(value => value.cardSuit === 'spade' && value.value === 'ace'));
// - всі шістки
console.log(deck.filter(value => value.value === '6'));
// - всі червоні карти
console.log(deck.filter(value => value.color === 'red'));
// - всі буби
console.log(deck.filter(value => value.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(deck.filter(value => (value.cardSuit === 'clubs' && value.value >= '9') && (value.cardSuit === 'clubs' && typeof value.value === 'string')));


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
//}

let reducer=deck.reduce((accum,value)=>{
    if (value.cardSuit==='spade'){
        accum.spades.push(value);
    }
     else if (value.cardSuit === 'clubs') {
        accum.clubs.push(value)
    } else if (value.cardSuit === 'diamond') {
        accum.diamonds.push(value)
    } else if (value.cardSuit === 'heart') {
        accum.hearts.push(value)
    }
    return accum;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]});

console.log(reducer);