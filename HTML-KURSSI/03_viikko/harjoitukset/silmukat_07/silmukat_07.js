/* 
Kirjoita funktio nimeltä sumAndAverage:
- Pyydä käyttäjältä 10 numeroa
- Laske ja lokita konsoliin: 
    - Kaikkien numeroiden summa.
    - Annettujen numeroiden keskiarvo.
    - Suurin ja pienin numero
*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function sumAndAverage() {
    let numbers = [];
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        let input = prompt(`Syötä numero ${i + 1}/10:`);
        let number = parseFloat(input);


        if (isNaN(number)) {
            alert("Virheellinen syöte! Syötä kelvollinen numero.");
            i--; 
            continue;
        }

    sum +=number;
}
let average = sum / numbers;
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log("Syötetyt numerot:", numbers);
console.log("Summa:", sum);
console.log("Keskiarvo:", average.toFixed(2));
console.log("Suurin numero:", max);
console.log("Pienin numero:", min);
}
