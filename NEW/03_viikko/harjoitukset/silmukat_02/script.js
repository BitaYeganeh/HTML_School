// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.



function logEvenNumbers() {
    let output = "";
    for (let i = 1; i <= 49; i++) {
        let a = i * 2;         // 2, 4, 6, ...
        let b = 100 - i * 2;   // 98, 96, 94, ...
        output += a + ", " + b + ", ";
    }
    output += "50"; // viimeinen luku
    console.log(output);
}

logEvenNumbers();