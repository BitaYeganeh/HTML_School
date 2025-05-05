/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/

const weather = {
    temperature:"12",
    humidity:"23",
    condition:"sateinen",
};
function huomio(weather){
    if (weather.condition === "sateinen") {
        console.log("ota satenvarjo!");
    } 
}

// call the function to test it:
huomio(weather);


/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
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
            if (course.studentsEnrolled > 30) {
                console.log(course.courseName);
        }

    });

    }
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
        if (city.population > 1000000){
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
        if (tr.type==="credit"){
            balance += tr.amount;
        } else if (tr.type === "debit"){
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

// Kirjoita koodisi tähän

/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/

// Kirjoita koodisi tähän

/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/

// Kirjoita koodisi tähän

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/

// Kirjoita koodisi tähän

/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/

// Kirjoita koodisi tähän

/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/

// Kirjoita koodisi tähän