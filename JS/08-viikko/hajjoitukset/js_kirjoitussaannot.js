/* Tehtävä 1: Käytä \"strict mode\" -tilaa

Luo funktio `task1`, joka käyttää \"use strict\" -tilaa.
Yritä käyttää muuttujaa ilman sen julistamista.
Ota virhe kiinni ja loggaa: \"Strict mode -virhe: [virheilmoitus]\"
*/






function task1() {
  'use strict';
  try {
    x = 10; // Virhe: x ei ole määritelty
  } catch (error) {
    console.log('Strict mode -virhe: ' + error.message);
  }
}

task1();












/* Tehtävä 2: Muuttujien oikea julistus

Julista vakio `MAX_USERS = 100` ja muuttuja `currentUsers = 10`.
Yritä muuttaa vakion arvoa ja ota virhe kiinni.
*/

function task2() {
  
 
    const MAX_USER = 100;
    let currentUsers = 10;
   try {
    MAX_USER = 120;

  } catch (error) {
    console.log("there is an error" , error.message);

  }
  task2();
  






}

/* Tehtävä 3: Luo objekti ja tulosta se

Luo objekti `userProfile`, jossa kentät:
- name
- email
- isAdmin
Tulosta objekti konsoliin.
*/


function task3() {
 const userProfile = {
  name:"Bita", email:"b.ye@bc.fi", isAdmin: false
 }
 console.log(userProfile);
};

task3();







/* Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen

Luo funktio `calculateArea(width, height)`, joka palauttaa suorakulmion pinta-alan.
*/

function calculateArea(width, height) {
  
  
  try{
   
    const area = width * height;
    

    console.log("the area is:", area);

  }catch(error){
    console.log("Virhe pinta-alan laskennassa:", error.message);
  }
};
calculateArea(10, 3);












/* Tehtävä 5: Vältä taikalukuja

Määritä vakio `DISCOUNT = 0.1`.
Luo funktio `applyDiscount(price)`, joka laskee hinnasta alennuksen.
*/

const DISCOUNT = 0.1;
function applyDiscount(price) {
  // Kirjoita koodi tähän
}

/* Tehtävä 6: Kirjoita hyödyllisiä kommentteja

Kirjoita funktio `greetUser(name)`, joka palauttaa tervehdyksen käyttäjälle.
Lisää funktioon kommentti, joka selittää sen tarkoituksen.
*/

function greetUser(name) {
  // Kirjoita koodi tähän
}

/* Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi

Paranna epäselvää funktiota käyttämällä parempia nimiä ja muotoilua.

Ennen:
function f(n){return n<0 ? 'negative' : 'positive';}
*/

function checkNumber(number) {
  // Kirjoita koodi tähän
}

/* Tehtävä 8: Korjaa koodin muotoilu

Kirjoita koodi uudelleen käyttäen oikeaa muotoilua ja sisennystä.

Ennen:
let x=10; function example(){console.log(x);}
*/

function example() {
  // Kirjoita koodi tähän
}