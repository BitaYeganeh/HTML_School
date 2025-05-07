/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

const weather = {
    temperature:12,
    humidity:65,
    condition:"sateinen",
};

const weather2 = {
    temperature:12,
    humidity:65,
    condition:"Aurinkoinen",
};
function checkRain(weather){
    if (weather.condition == "sateinen") {
        console.log("ota satenvarjo!");
    } else if(weather.condition=="Aurinkoinen"){
        console.log("Käytä aurinkolasit");
    }else{
        console.log("pidä kivaa");
    }
}

// call the function to test it:
checkRain(weather);
checkRain(weather2);


/* Tehtävä 2
Määrittele taulukko (Array) nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/

const shoppingCart=[

    {
        name:"Maito",
        price:"2.23",
        quantity:3,
    },
    {
        name:"Leipä",
        price:"1.7",
        quantity:1,
    },
    {
        name:"voita",
        price:"1.35",
        quantity:2,
    }, 

]
      let total = 0;
      shoppingCart.forEach(item => {
         total += item.price * item.quantity;
});

console.log("Total price is: €"+total.toFixed(2));


/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/
const restaurants = [
    {
        name:"restaurant 1",
        cuisineType:"steak",
        rating:4,
    },

    {
        name:"restaurant 2",
        cuisineType:"kebab",
        rating:5,
    },

    {
        name:"restaurant 3",
        cuisineType:"soup",
        rating:2,
    },
]

function topRating (restaurants){
    return restaurants.filter(food => food.rating >=4);
}

// call the function and log teh resault:
const topRestaurant= topRating(restaurants);
console.log(topRestaurant);



/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const bankAccount = {
    accountHolder: "Bita Yeganeh",
    balance: 2345.70,
    transactions:[-75.20, +23 , -1200, +3200, -800],

};

function laskeminen (data){
    let sum = data.balance;

    for(let i=0; i < data.transactions.length; i++) {
    sum += data.transactions[i];
}
console.log("total balance: €" + sum.toFixed(2));
return sum;
}

laskeminen(bankAccount);



/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/

const students = [
    {
        name:"Bita",
        scores: [10, 17, 3, 20, 12],
        averageScore:0,
    },

    {
        name:"Sarah",
        scores: [20, 9, 12, 10, 18],
        averageScore:0,
    },

    {
        name:"Jonne",
        scores: [14, 20, 11, 10, 16],
        averageScore:0,
    },

];

function updatedAverageScore(data){

    data.forEach(data => {

        let sum = 0;
        for ( let i =0; i < data.scores.length; i ++ ) {
       
        sum += data.scores[i];
    }
 

    let averageScore = 0;
    data.averageScore = (sum / data.scores.length);


})};
updatedAverageScore(students);
console.log(students);


/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/
const courses = [
    {
        courseName:"Math",
        instructor:"xxx",
        studentsEnrolled:34,
    },
    {
        courseName:"Physics",
        instructor:"xxx",
        studentsEnrolled:31,
    },
    {
        courseName:"science",
        instructor:"gggg",
        studentsEnrolled:26,
    },
];
    function fullClass (data) {
        data.forEach(course => {
            if (course.studentsEnrolled >= 30) {
                console.log(course.courseName);
        }

    });

    };
fullClass(courses);



/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/

const pet = {
    name:"Rex",
    species:"2years",
    isVaccinated:false,
};

function vaccinationCheck(pet){
    return pet.isVaccinated ? "Rokotus on kunnossa" : "Rokotusta tarvitaan";
}

console.log(vaccinationCheck(pet));

/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/

const city = [
    {
        name:"London",
        population:3000000,
        landmark:"we",
    
    },
    {
        name:"Moscow",
        population:2000000,
        landmark:"gg",
    
    },
    {
        name:"Helsinki",
        population:50000,
        landmark:"ll",
    
    },
];

function size (data){
    data.forEach(city => {
        if (city.population >= 1000000){
            console.log(city.name+ ": Tämä on suuri kaupunki!");
        }else{
            console.log(city.name+ ": Tämä on pieni kaupunki");
        }
    });
}

size(city);



/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const transactions = [

    {type:"credit", amount: 100},

    {type:"credit", amount: 250},

    {type:"debit", amount: 1000},

    {type:"debit", amount: 100},
];

function totalBalance (data){
    let balance = 0;
    

    data.forEach(tr => {
        if (tr.type=="credit"){
            balance += tr.amount;
        } else if (tr.type == "debit"){
            balance -= tr.amount;
        }
    });

return balance;
}

console.log("Total balance is:", totalBalance(transactions));



/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/

const foxPack = [
    {name:"vivi", age:1, furColor:"brown"},
    {name:"xixi", age:1.5, furColor:"black"},
    {name:"aaaa", age:4, furColor:"white"},
    {name:"bbbb", age:2, furColor:"brown-black"},

];

function alleKaksiVuotias(foxPack){
    // filter the ones who are under 2 years and firstly give them a name:
    const puppies=foxPack.filter( fox => fox.age < 2);

    puppies.forEach(fox => {
        console.log(fox.name + ": Tama kettu on vauva");

    });


    // Palautetaan the filtered ones
    return puppies;
}

alleKaksiVuotias(foxPack);


/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/

const gameCharacter = {

    name: "xxx", 
    level: 2, 
    health: 100,
    inventory: ["sword", "map", "shield"]

};
 const printInventory = (data)=>{
    console.log(data.inventory);
    console.log(data.inventory.join(", "));
 };
 printInventory(gameCharacter);


/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

const employee = [

{name:"Bita", role:"QC", workingHours:38.25},
{name:"Sarah", role:"HR", workingHours:42},
{name:"Jonne", role:"Johtaja", workingHours:39},
{name:"Anna", role:"sales", workingHours:56},

];
function yliTyötä (employees){
    employees.forEach(employee => {

    if(employee.workingHours > 40){
        console.log(employee.name + ":is working more than 40 hours per week!");
    }
    else{
        console.log(employee.name + ":is working normally");
    }

})};
yliTyötä(employee);


/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/


const musicAlbums = [
    {
        title:"vvv",
        artist:"hhh",
        releaseYear:2022,
    },

    {
        title:"uuuu",
        artist:"hhh",
        releaseYear:2002,
    },
    {
        title:"aaa",
        artist:"hhh",
        releaseYear:1988,
    },
        
];
function newAlbum(musicAlbums){
    musicAlbums.forEach(album =>{
        if(album.releaseYear >= 2000){
            console.log(album.title + " :is new");

        }
    })
};
newAlbum(musicAlbums);


/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/
const cars = [
    {
        brand:"BMW",
        model: "x6",
        horsepower: "335hp"
    },
    {
        brand:"Audi",
        model: "Q4",
        horsepower: "282hp"
    },
    {
        brand:"Tesla",
        model: "S plaid",
        horsepower: "1000hp"
    },
];
function suurinHP (cars){
    let strongestCar = cars[0];
    let maxHP = parseInt(cars[0].horsepower);


    for ( let i = 1 ; i < cars.length; i ++){
        const currentHP =parseInt(cars[i].horsepower);
        if(currentHP > maxHP){
            maxHP = currentHP;
            strongestCar = cars[i];
        }
    }
    return strongestCar;


}
const fastest = suurinHP(cars);
console.log(`${fastest.brand} ${fastest.model} has the most horsepower: ${fastest.horsepower}`);

/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/

let cars = [
    {
        brand:"BMW",
        model: "x6",
        horsepower: "335hp"
    },
    {
        brand:"Audi",
        model: "Q4",
        horsepower: "282hp"
    },
    {
        brand:"Tesla",
        model: "S plaid",
        horsepower: "1000hp"
    },
];
const getMostPowerful = (cars)=> {

    let largest;
    let measurment =0;
    cars.map((car)=>{
        if (car.horsepower >measurment){
            measurment = cars.horsepower;
            largest = car;
        }
    });
    return largest;
    console.log(getMostPowerful(cars));
}






/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/
const airports = [
    {
        name:"Helsingin airport",
        country:"Finland",
        flightsPerDay:100,
    },
    {
        name:"Istanbul airport",
        country:"Turkey",
        flightsPerDay:1500,
    },
    {
        name:"London airport",
        country:"UK",
        flightsPerDay:700,
    },
];
function enitenLentoja (airports) {

    let maxAirport = airports[0];

    for (let i = 1; i < airports.length; i ++) {

        if (airports[i].flightsPerDay > maxAirport.flightsPerDay) {

            maxAirport = airports[i];
   
}

    }

return maxAirport;
}
// call the function and display the result:

const n = enitenLentoja(airports);

console.log(`${n.name} at ${n.country} has the most flights per day with ${n.flightsPerDay} flights per day!`);
