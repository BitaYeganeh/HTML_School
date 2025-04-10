/* Kysy käyttäjältä viisi kertaa jotain sanaa.
 Jos käyttäjä painaa vain "OK" ilman syötettä 
 (eli antaa tyhjän vastauksen), ohita se. 

Tulosta lopuksi konsoliin kaikki annetut sanat. 
 */
function takeWords() {
    let attempts = 0;
    let words = [];

    while (attempts < 5) {
        let input = prompt("Please enter a word:");

        if (input !== null && input.trim() !== "") {
            words.push(input.trim());
        }

        attempts++;
    }

    return words; // ✅ Return the collected words
}

// ✅ Call the function, store the result
const enteredWords = takeWords();

// ✅ Then log the result
console.log("You have entered these words:", enteredWords);