// Harjoitus 12: Käännä safariAnimals-taulukon järjestys
/*
Käännä safariAnimals-taulukon järjestys päinvastaiseksi.
Odotettu tulos: ['Zeebra', 'Leopardi', 'Gazelli', 'Elefantti']
*/
// Kirjoita koodisi tähän

let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];
safariAnimals.sort().reverse();
console.log(safariAnimals);


// way 2
let sortedAnimals = [...safariAnimals].sort();

let reversedAnimals = [...sortedAnimals].reverse();
console.log(reversedAnimals);