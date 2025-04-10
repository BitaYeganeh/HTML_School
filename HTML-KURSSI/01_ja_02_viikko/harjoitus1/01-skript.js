

//  Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
// Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

// Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

// Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
let a = 20;
let b = 5;
let summa = a + b; 
console.log("yhteen", summa);// tulostaa: 25
let erotuss = a - b;
console.log("vahennys", erotuss);//tulostaa: 15
let tulo = a * b;
console.log("kerto", tulo);//tulostaa: 100

///**Tehtävä: Merkkijonojen yhdistäminen
// Luo kaksi muuttujaa, etunimi ja sukunimi, ja aseta niihin omat etu- ja sukunimesi.
// Yhdistä nämä kaksi merkkijonoa ja tulosta tulos konsoliin.*/
let etunimi = "Bita";
let sukunimi = "Yeganeh";
let yhdista = etunimi + " " + sukunimi;
console.log("yhdistetty nimi:",yhdista);




// 1 Maili on 1.609344 kilometriä

function milesToKilometers(miles){
    let km = miles * 1.609344;
    return km.toFixed(1);
}
console.log(milesToKilometers(8));

