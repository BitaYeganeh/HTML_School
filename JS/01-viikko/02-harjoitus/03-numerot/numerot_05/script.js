//Tehtävä: Ostoskori
 //Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda
 //  ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
// Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
// Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
//- Tulosta yhteishinta konsoliin.
tuote1 = "Milk";
tuote2 = "Butter";
tuote3 = "Apples";
let tuote1_hinta = 1.6;
let tuote2_hinta = 3.2;
let tuote3_hinta = 4.6;
yhteishinta = (tuote1_hinta + tuote2_hinta + tuote3_hinta);

console.log(yhteishinta,);


/////way2:

tuote4_hinta = 1.6;
tuote5_hinta = 3.2;
tuote6_hinta = 4.6;

function Summa(tuote4_hinta, tuote5_hinta,tuote6_hinta){
    return tuote4_hinta + tuote5_hinta + tuote6_hinta;
}
yhteishinta = (tuote4_hinta + tuote5_hinta + tuote6_hinta);
total_price = yhteishinta.toFixed(2);
console.log(`total_price: ${total_price} €`);
