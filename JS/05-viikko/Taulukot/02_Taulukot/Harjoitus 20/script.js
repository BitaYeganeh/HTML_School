// Harjoitus 20: Suodata `filter`:in avulla sanat, jotka ovat pidempiä kuin 5 kirjainta
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];

/*
Luo uusi taulukko, joka sisältää vain sanat, joissa on yli 5 kirjainta words-taulukosta.
Odotettu tulos: ['banaani', 'kirsikka', 'mansikka']
*/
// Kirjoita funktiosi tähän

let longWord = words.filter((word)=> word.length >5 );
console.log(longWord);