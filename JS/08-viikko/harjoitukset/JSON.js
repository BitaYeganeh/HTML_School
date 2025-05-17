/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/
const student = {
    name:"Anna koskinen",
    age:34,
    grade:"A",

};
const jsonString = JSON.stringify(student);
console.log(jsonString);


/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/

const teh2 = JSON.parse(jsonString);
console.log(teh2);


/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const classroom = [
    
    {name: "Bita", age:30, grade:"A"},
    {name: "Anna", age:28, grade:"B"},
    {name: "Ali", age:26, grade:"A"},
];
// Convert to JSON string
const jsonString1 = JSON.stringify(classroom);

// Now parse the JSON string back to a JavaScript object (array)
const classroom1 = JSON.parse(jsonString1);
console.log(classroom1);


/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/


// Now loop through classroom1 and log all student names
classroom1.forEach(data => {

    // Log each student's name
    console.log(data.name);
    
});

/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")

Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/

const weatherReport = { 
    temperature: 20,
    humidity: "43%",
    conditions: "sunny",
};
const weatherJSON = JSON.stringify(weatherReport);
console.log(weatherJSON);
const weather = JSON.parse(weatherJSON);
console.log(weather.conditions);

/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/

const movies = [
    {title:"aaa", director:"yyyy", rating:4 },
    {title:"ccc", director:"zzz", rating:10 },
    {title:"bbbb", director:"xxxx", rating:9 },
];
const moviesString = JSON.stringify(movies);
console.log(moviesString);
const movies1 = JSON.parse(moviesString);

// Filter movies with rating >= 8
 const highRtaed = movies1.filter(movie => movie.rating >= 8);

 // Loop through the filtered movies and log the title of each one

 highRtaed.forEach(movie => {
    console.log(movie.title);
 });


/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/
const film = [
    {title:"aaa", director:"yyyy", rating:4 },
    {title:"ccc", director:"zzz", rating:10 },
    {title:"bbbb", director:"xxxx", rating:9 },
];
const movieJSON = JSON.stringify(film);
 function filterHighRatedMovies(jsonString){
        // Convert JSON string to JavaScript array
        const moviesArray =  JSON.parse(jsonString);
        const highRate = moviesArray.filter(data => data.rating > 8);
         // return the function
         return highRate;
 }


/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const shoppingCart = {
    items:[
        {name:"Maito", price:2.46},
        {name:"leipä", price:1.16},
        {name:"voita", price:3.10},
        {name:"Mehua", price:5.46},

    ],
};
const shoppingCartString = JSON.stringify(shoppingCart);
console.log(shoppingCartString);

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/

function totalCartValue(jsonString){
    const olio = JSON.parse(jsonString);

    let total = 0;
    olio.items.forEach(item =>{
        total+= item.price;
    });
   
    return total;


};
const total=totalCartValue(shoppingCartString);
console.log("Total price: €", total.toFixed(2));

/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

const gameProgress = { 
    level:2,
    score:40,
    livesRemaining:3,
};
const gameString = JSON.stringify(gameProgress);
console.log(gameString);

const gameOlio = JSON.parse(gameString);

//update score:
gameOlio.score += 100;
    console.log("New score is:", gameOlio.score);
    const updated = JSON.stringify(gameOlio);
    console.log("Updated JSON:", updated);

