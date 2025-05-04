/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/

const library = [ 
    {
        title:"Kuolema ja Pingviini", 
        author:"Kurkov, Andrei", 
        yearPublished:1996 
    },
    {
        title:"Eloquent JavaScript, 4th edition", 
        author:"Haverbeke, Marjin", 
        yearPublished:2024 
    },
    {
        title:"Nevermoor: morriganin koetukset", 
        author:"townsend, Jessica", 
        yearPublished:2018 
    }
];

/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/

console.log("Ensimmäisen kirjan nimi:", library[0].title);
library[1].yearPublished = 2025;
console.log("Toisen kirjan uusi julkaisuuvuosi:", library[1].yearPublished);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/
// Kirjoita koodisi tähän

library[0].genres = ["Absurdi", "Tragikomiikka"];

library[0]["isAvailable"] =true;

console.log("genret:", library[0]);

/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/

// Kirjoita koodisi tähän


class Book {

    constructor (title, author, yearPublished, genres){
    this.title = title;
    this.author =author;
    this.yearPublished=yearPublished;
    this.genres = genres;
}
}

const kirja1 = new Book ("Why We Sleep", "Matthew Walker", 1992, ["Unihäiriöt"]);
library.push(kirja1);

console.log(library);



/* Tehtävä 5
Kirjoita funktio nimeltä `createBook`, joka ottaa parametreina `title`, `author`, `yearPublished` ja `genres` (taulukko).
Funktion tulee palauttaa uusi kirjaolio näillä ominaisuuksilla.
Testaa `createBook`-funktiota luomalla uusi kirja käyttäjän antamilla arvoilla ja tulosta se konsoliin.
*/


/* Tehtävä 6
Muunna `library`-kokoelma JSON-merkkijonoksi ja tulosta se konsoliin.
Jäsennä JSON-merkkijono takaisin JavaScript-olioksi ja tulosta ensimmäisen kirjan `title` konsoliin.
*/



/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

// Kirjoita koodisi tähän
const students = [
    { name: "Sarah", age:22, grade: 100},
    {name:"Ali", age:19, grade:73},
    {name:"Liisa", age:28, grade:88},
    {name:"Reza", age:19, grade:93},
        
];

// suodatetaan hyvät opiskelijat:
let goodGrades=students.filter(n => n.grade > 90)

// tulostetaan hyvien opiskelijoiden pelkät nimet
goodGrades.forEach(topStudent => {

console.log(topStudent.name)
})


/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/

const car = {
    brand:"Audi",
    model:"Q4",
    year:2024,
    isElectric: true,
}
if (car.isElectric){
    console.log("This car is eco-friendly!")
}
else{
    console.log("This car runs on fuel.")
}

if(car.year >= 2020){
    console.log("Auto on uusi")
}else{
    console.log("Auto on vanha")
}
///
car.isElectric ? console.log("This car is eco-friendly!") : console.log("This car runs on fuel.");
console.log(car.isElectric ? "sähköauto" : "polttomoottoriauto")




/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/


const movies = [
    {title:"ooooohgjhj", director:"lllllllknk", rating:"7"},
    {title:"mmmmmmmkjnkjnjh", director:"kkkkkjjhkguh", rating:"10"},
    {title:"jjjjjjjkjhjhh", director:"hhhhhhkhhjhk", rating:"2"},
    
];
for (let n of movies) {

if (n.rating > 8) {
    console.log(n.title);
}
}


/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

// Kirjoita koodisi tähän

const cars = [
    {
        brand:"Audi",
        model:"Q4",
        year:2024,
    },

    {
        brand:"BMW",
        model:"X6",
        year:2014,
    },
    {
        brand:"Toyota",
        model:"Yaris",
        year:2004,
        },
]

function findOldestCar(cars){
    let oldestCar = cars[0];

    for (let n of cars){
        if (n.year < oldestCar.year){
            oldestCar= n;
        }
    }
    
    return oldestCar;
}
const oldestCar = findOldestCar(cars);
console.log("Oldest car is:", oldestCar);



/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

// Kirjoita koodisi tähän


const userProfiles = [
{
    userName: "Bita_Yeganeh85",
    email:"b.yeganeh85@gmail.com",
    isAdmin:"true",
},

{
    userName: "LauraJarvinen",
    email:"break76@bc.com",
    isAdmin:"true",
},

{
    userName: "Sarah734",
    email:"sarahgt@yahoo.com",
    isAdmin:"false",
},

]

function getAdmins(users) {
    return users.filter(user => user.isAdmin === "true");
  }

const administrators = getAdmins(userProfiles);
console.log(administrators);




/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

// Kirjoita koodisi tähän

const orders = [
    {
    orderId: 456321, customerName: "Bita", totalAmount: 43.56, status: "completed",
    },

    {
    orderId: 456322, customerName: "Otso", totalAmount: 34.16, status: "pending",
    },

    {
    orderId: 456323, customerName: "Leevi", totalAmount: 15.90, status: "completed",
    },

    {
    orderId: 456324, customerName: "Anna", totalAmount: 5.60, status: "pending",
    },
];

function valmisOrders(orders){
    return orders.filter(order => order.status === "completed")
}

console.log(valmisOrders(orders));

console.log(valmisOrders(orders)
.map(order=>order.orderId));


/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

// Kirjoita koodisi tähän

const samrtphones = [

{
    brand: "Apple",
    model: "16ProMax", 
    batteryLife:"14685mAh",
    is5GEnabled: true,
},

{
    brand: "Samsung",
    model: "S4", 
    batteryLife:"3561mAh",
    is5GEnabled: true,
},

{
    brand: "Apple",
    model: "iPhone 16", 
    batteryLife:"3561mAh",
    is5GEnabled: true,
},
{
    brand: "Nokia",
    model: "n12", 
    batteryLife:"4623mAh",
    is5GEnabled: false,
},
];

samrtphones.forEach(phone => {
    const message = phone.is5GEnabled
    ? `${phone.brand} ${phone.model} : supports 5G`
    : `${phone.brand} ${phone.model} : does not support 5G!`;

    console.log(message);
});



/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

// Kirjoita koodisi tähän

const fox =
{
    name:"Jimmi",
    age:6,
    habitat:"hvghg",
}

function checkAge(fox){
if (fox.age < 3){
console.log("This fox is young");}
else{
    console.log("This fox is an adult");
}}
checkAge(fox);


/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

// Kirjoita koodisi tähän
const employees = [
    {
        name:"Bita", 
        position:"Senior Quality Control",
        salary:3500,
    
    },
    {
        name:"Sarah", 
        position:"Sales",
        salary:2700,
    
    },
    {
        name:"Minna", 
        position:"HR",
        salary:2900,
    
    },

]

function totalSalary(employees){

    let sum = 0;

    employees.forEach(employee => {
        sum += employee.salary;
    
});

return sum;
}
console.log(`Total salary is: €${totalSalary(employees)}`);