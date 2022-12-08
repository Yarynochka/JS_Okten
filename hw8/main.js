//  Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//  створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname,email,phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let user1= new User(1,'Anna','Petrova','anna@gmail.com','+380984581257');
// console.log(user1);
// let user2= new User(2,"Anton",'Ilkiv','anil@gmail.com','+380679581851')
// console.log(user2);
// let user3= new User(3,'username3','surname3', 'username3@bigmir.net','+380502465781');
// let user4 = new User(4,'username4','surname4', 'username4@bigmir.net','+380502468982');
// let user5= new User(5,'username5','surname5', 'username5@gmail.com','+380978462543');
// let users=[];
// users.push(user1,user2,user3,user4,user5);
// console.log(users);

//  - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUser=users.filter(value => value.id % 2===0);
// console.log(filterUser);

//  - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortUser=users.sort((a,b)=>b.id-a.id);
// console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client{
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.phone=phone;
//         this.order=order;
//     }
//
// }
//
// let client1=new Client(1,"nameClient1",'surnameClient1','email1@gmail.com','+380984571254',['milk', 'bread','piper','apply']);
// let client2=new Client(2,"nameClient2",'surnameClient2','email2@gmail.com','+3809725712274',['milk', 'bread','piper','apple','sugar']);
// let client3=new Client(3,"nameClient3",'surnameClient3','email3@gmail.com','+3809844711574',['milk', 'bread','piper','apply','juice','sugar']);
// let client4=new Client(4,"nameClient4",'surnameClient4','email4@gmail.com','+3809848468451',['milk', 'bread','apply']);
//
// let clients=[];
// clients.push(client1,client2,client3,client4);
//
// console.log(clients);
//
// let clientSort=clients.sort((a,b)=>b.order.length-a.order.length);
// console.log(clientSort);



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producer,year,maxSpeed,engine){
//     this.model=model;
//     this.producer=producer;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.engine=engine;
//
//     this.drive=function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info=function () {
//         for (const carKey in this){
//             if (typeof this[carKey] !=='function'){
//                 console.log(`${carKey}: ${this[carKey]}`);
//             }
//         }
//
//     }
//
//     this.newSpeed=function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear=function (newValue){
//         this.year=newValue;
//     }
//
//     this.addDriver=function (driver){
//         this.driver=driver;
//     }
//
// }
//
// let car1= new Car('Renault','France','2008',200,1.2);
// console.log(car1);
// car1.drive();
// car1.info();
//
// car1.newSpeed(20);
// car1.changeYear(2016);
// car1.addDriver('Yaryna');
// console.log(car1);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info () {
//         for (const carKey in this){
//             if (typeof this[carKey] !=='function'){
//                 console.log(`${carKey}: ${this[carKey]}`);
//             }
//         }
//     }
//     newSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     driver (newDriver){
//         this.driver=newDriver;
//     }
// }
// let car2= new Cars('Renault','France','2008',200,1.2);
// console.log(car2);
// car2.drive();
//
// car2.info();
// car2.newSpeed(-20);
// car2.changeYear(1999);
// car2.driver('Volodymyr');
// console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Princes(name,age,size){
    this.name=name;
    this.age=age;
    this.size=size;
}

let princes1= new Princes('Anna',18,36);
let princes2= new Princes('Olha',23,39);
let princes3= new Princes('Viktoria',21,35);
let princes4= new Princes('Diana',27,37);

let princeses=[];
princeses.push(princes1,princes2,princes3,princes4);
console.log(princeses);



// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name,age,findSize) {
        this.name=name;
        this.age=age;
        this.findSize=findSize;
    }
}
let prince= new Prince('Viktor',29,35);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

function Cinderellas(arr, boy) {
    for (const arrElement of arr) {
        if (arrElement.size === boy.findSize) {
            console.log(`Cinderella is ${arrElement.name}`)
        }
    }

}

Cinderellas(princeses,prince);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderellas=princeses.find(value => value.size===prince.findSize);
console.log(findCinderellas);