/* 
Kirjoita funktio nimeltä countdownTimer:
- Ota syötteenä luku (esim. 10) ja simuloi lähtölaskenta konsolissa.
- Tulosta jokainen luku laskevassa järjestyksessä nollaan asti
- Lopuksi tulosta: "Aika loppui!".
*/


function countdownTimer(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
    console.log("Aika loppui!");
}

countdownTimer(10);