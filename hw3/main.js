// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a=+prompt('enter a number');
// if( a!==0){
//     document.write('<h>correct</h2>');
// }
// else {
//     document.write('<h>incorrect</h2>');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time=+prompt('enter a time from 0 to 59');
// if(time>=0 && time<15){
//     document.write('<h2> 1 quarter </h2>')
// }
// else if(time>=15 && time<30){
//     document.write('<h2> 2 quarter </h2>')
// }
// else if(time>=30 && time<45)
// {
//     document.write('<h2> 3 quarter </h2>')
// }
// else if(time>=45 && time<=59)
// {
//     document.write('<h2> 4 quarter </h2>')
// }
// else {
//     document.write('enter correct time')
// };

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day=+prompt('enter number of a day');
// if (day>=0 && day<11){
//     document.write('1 decade')
// }
//  else if (day>=11 && day<21){
//     document.write('2 decade')
// }
// else if (day>=21 && day<=31){
//     document.write('3 decade')
// }
// else{
//     document.write('please, enter correct day of month')
// };


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let week=prompt('enter a weekday')
// switch (week){
//     case 'monday':
//     case 'Monday':
//         document.write('You should go to the gym')
//         break;
//     case 'tuesday':
//     case 'Tuesday':
//         document.write('You should go to the library')
//         break;
//     case 'wednesday':
//     case 'Wednesday':
//         document.write('You should meet with friends')
//         break;
//     case 'thursday':
//     case 'Thursday':
//         document.write('You have to pay a bills')
//         break;
//     case 'friday':
//     case 'Friday':
//         document.write('You should do a shopping')
//         break;
//     case 'saturday':
//     case 'Saturday':
//         document.write('You should go to the party')
//         break;
//     case 'sunday':
//     case 'Sunday':
//         document.write('You should meet with family')
//         break;
//     default:
//         console.log('enter correct weekday')
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a=+prompt('enter first number');
// let b=+prompt('enter second number');
//
// if(a>b){
//     console.log(a)
// }
// else if(b>a){
//     console.log(b)
// }
// else if(a===b){
//     console.log('equality')
// }
// else {
//     console.log('enter a correct value')
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x= prompt('write your fillings ')||'default';
console.log(x);