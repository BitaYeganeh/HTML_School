// Harjoitus 17: Poista ensimmäinen ja viimeinen alkio birdSpecies-taulukosta
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];

/*
Odotettu tulos: ['Pöllö', 'Haukka', 'Pääsky']
*/
// Kirjoita koodisi tähän

birdSpecies.shift(); // remove first
birdSpecies.pop();   // remove last
console.log(birdSpecies);


//way2:
let newArray = birdSpecies.slice(1, -1);
console.log(newArray);