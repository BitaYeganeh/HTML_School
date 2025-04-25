
// Harjoitus 11: Lajittele safariAnimals-taulukko aakkosjärjestykseen

/*
Odotettu tulos: ['Elefantti', 'Gazelli', 'Leopardi', 'Zeebra']
*/
// Kirjoita koodisi tähän

let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];
safariAnimals.sort();
console.log(safariAnimals);

// way 2:
let sortedAnimals = [...safariAnimals].sort();
console.log(sortedAnimals);