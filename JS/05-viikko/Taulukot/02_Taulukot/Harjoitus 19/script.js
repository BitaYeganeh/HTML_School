// Harjoitus 19: Korota jokaista hintaa 10 % käyttäen `map`-metodia
let prices = [5, 10, 15, 20];

/*
Luo uusi taulukko, jossa jokainen hinta on kasvatettu 10 %.
Odotettu tulos: [5.5, 11, 16.5, 22]
*/
// Kirjoita funktiosi tähän
let increasedPrices = prices.map((price)=> price *1.1);
console.log(increasedPrices);