// Harjoitus 15: Muunna kaikki attendees-taulukon nimet isoiksi kirjaimiksi
/*
Luo uusi taulukko, jossa jokainen attendees-taulukon nimi on kirjoitettu isoilla kirjaimilla.
Odotettu tulos: ['JONNA', 'SANTTU', 'JONNA', 'ALEX', 'JONNA']
*/
// Kirjoita koodisi tähän

let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];
let upperLetters = attendees.map(name => name.toUpperCase());
console.log(upperLetters);
