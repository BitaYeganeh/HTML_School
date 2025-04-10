/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function askToContinue() {
    let sum = 0;
    let count = 0;
    
    while (true) {
        let number = prompt("Syötä yksi numero:");
        number = parseFloat(number);

    
        if (isNaN(number)) {
            alert("Virheellinen syöte! Syötä numero.");
            continue; 
        }

    
        sum += number;
        count++;

        let continueInput = prompt("Haluatko antaa toisen numeron? (k/e)");

        if (continueInput.toLowerCase() === 'k') {
            continue; 
        } else if (continueInput.toLowerCase() === 'e') {
            break; 
        } else {
            alert("Virheellinen syöte! Syötä 'k' jatkaaksesi tai 'e' lopettaaksesi.");
        }
    }

    
    if (count > 0) {
        let average = sum / count;
        console.log(`Syötettyjen numeroiden keskiarvo: ${average.toFixed(2)}`);
    } else {
        console.log("Et syöttänyt yhtään numeroa.");
    }
}