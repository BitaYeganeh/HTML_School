// Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako
// näistä luvuista on parillisia.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.


function countEvenNumbers() {
    let evenCount = 0;
    let totalNumbers = 20;

    for (let i = 0; i < 20; i++) {
        let input = prompt(`Syötä luku ${i + 1}/20:`);
        let number = parseInt(input);

        if (!isNaN(number)) {
            if (number % 2 === 0) {
                evenCount++;
            }
        } else {
            alert("Virheellinen syöte! Syötä numero.");
            i--; // vähennetään i:tä, jotta sama kierros toistetaan
        }
    }

    console.log(`Parillisten lukujen määrä: ${evenCount}`);
}

// Kutsutaan funktiota
countEvenNumbers();